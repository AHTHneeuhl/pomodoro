"use client";

import { Box, Card, Heading, Meter, Paragraph, Tag, Text } from "grommet";
import { MoreVertical } from "grommet-icons";

type TProps = {
  title: string;
  description: string;
  status: string;
  priority: string;
};

const Task: React.FC<TProps> = ({ title, description, status, priority }) => {
  return (
    <Card pad="small">
      <Box direction="row" align="center" justify="between">
        <Box>
          <Heading size="small" margin="none">
            {title}
          </Heading>
          <Box margin="none" pad="none" direction="row" gap="medium">
            <Paragraph>{status}</Paragraph>
            <Paragraph>{priority}</Paragraph>
          </Box>
        </Box>
        <MoreVertical size="large" cursor="pointer" />
      </Box>
      <Meter
        size="full"
        thickness="xsmall"
        values={[
          {
            value: 45,
            color: "graph-0",
            highlight: true,
            label: "string",
            onClick: () => {},
          },
        ]}
      />
    </Card>
  );
};

export default Task;
