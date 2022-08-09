import React from "react";
import { Circle, InnerText } from "./Elements";
import { useTheme } from "styled-components";
import { getColor, getValue } from "helpers/circular-color";
const CircularProgress = ({ stat }) => {
  const theme = useTheme();
  const barColor = getColor(stat);
  const value = getValue(stat, 1100);
  return (
    <Circle width="100%" height="100%" viewBox="-25 -25 400 400">
      <circle
        stroke={theme.background}
        cx="175"
        cy="175"
        r="175"
        stroke-width="10"
        fill="none"
      ></circle>
      <circle
        stroke={barColor}
        transform="rotate(-90 175 175)"
        cx="175"
        cy="175"
        r="175"
        stroke-dasharray="1100"
        stroke-width="30"
        stroke-dashoffset="1100"
        stroke-linecap="round"
        fill="none"
        style={{
          strokeDashoffset: value,
          transition: "stroke-dashoffset 1s ease-out 0s",
        }}
      ></circle>
      <InnerText
        // fill="Maroon"
        x="50%"
        y="50%"
        dx="-20%"
        text-anchor="middle"
      >
        {stat}
      </InnerText>
    </Circle>
  );
};

export default CircularProgress;
