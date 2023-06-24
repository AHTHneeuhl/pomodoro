"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, Heading } from "grommet";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { user } = useUser();

  return (
    <Box
      direction="row"
      align="center"
      justify="between"
      pad={{ horizontal: "medium" }}
    >
      <Heading size="small" margin="none">
        <Link href="/">Pomodoro</Link>
      </Heading>
      <nav>
        {user ? (
          <Box className="flex items-center space-x-5">
            <Link href="/api/auth/logout">Logout</Link>
            <Image
              alt="profile"
              src={user.picture ? user.picture : ""}
              width={32}
              height={32}
            />
          </Box>
        ) : (
          <Link href="/api/auth/login">Login</Link>
        )}
      </nav>
    </Box>
  );
};

export default Header;
