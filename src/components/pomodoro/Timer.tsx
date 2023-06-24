"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box, Heading } from "grommet";

interface StyledProgressProps {
  width: number;
}

const StyledMeterContainer = styled.div`
  position: relative;
  width: 250px; /* Adjust the width as needed */
  height: 250px; /* Adjust the height as needed */
  border-radius: 50%;
  background-color: #fcfcfc; /* Adjust the background color as needed */
  overflow: hidden;
`;

const StyledProgressBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 24px solid #f1f1f1; /* Adjust the border width and color as needed */
  border-radius: 50%;
  box-sizing: border-box;
`;

const StyledProgressInner = styled.div<StyledProgressProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 24px solid #7d4cdb; /* Adjust the border width and color as needed */
  clip-path: ${({ width }) => `polygon(
    50% 50%,
    50% 0%,
    calc(50% + ${Math.sin((1 - width / 100) * 2 * Math.PI) * 50}%)
      calc(50% - ${Math.cos((1 - width / 100) * 2 * Math.PI) * 50}%),
    50% 50%
  )`};
  transition: clip-path 0.5s ease-in-out;
  box-sizing: border-box;
`;

const StyledProgressContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Timer: React.FC = () => {
  const [meterValue, setMeterValue] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (meterValue < 100) {
      const timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes === 0) {
            clearInterval(timer);
            // Timer has finished, you can add your logic here
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
        setMeterValue((meterValue) => meterValue - (1 / 1500) * 100);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [meterValue, minutes, seconds]);

  return (
    <Box align="center">
      <StyledMeterContainer>
        <StyledProgressBorder />
        <StyledProgressInner width={meterValue} />
        <StyledProgressContent>
          <Heading size="medium">
            {`${minutes}:${seconds.toString().padStart(2, "0")}`}
          </Heading>
        </StyledProgressContent>
      </StyledMeterContainer>
    </Box>
  );
};

export default Timer;
