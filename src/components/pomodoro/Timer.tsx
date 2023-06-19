"use client";

import { Box, Meter } from "grommet";
import { useEffect, useState } from "react";

const Timer: React.FC = () => {
  const [meterValue, setMeterValue] = useState(25);

  useEffect(() => {
    if (meterValue < 100) {
      const timer = setTimeout(() => {
        setMeterValue((meterValue) => meterValue + 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [meterValue]);

  return (
    <Box align="center">
      <Meter
        type="circle"
        values={[
          {
            value: meterValue,
            color: "graph-0",
            highlight: true,
            label: "string",
            onClick: () => {},
          },
        ]}
      />
    </Box>
  );
};

export default Timer;
