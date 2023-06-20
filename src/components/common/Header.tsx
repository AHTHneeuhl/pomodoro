"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Box } from "grommet";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { user } = useUser();

  return (
    <header>
      <Box>
        <Link href="/">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            ></path>
          </svg>
        </Link>
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
    </header>
  );
};

export default Header;
