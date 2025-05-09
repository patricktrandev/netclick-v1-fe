import React from "react";

const CircularProgressbar = ({
  percent,
  size = 50,
  strokeWidth = 5,
  strokeColor = "green",
}) => {
  return (
    <div>
      <svg width={size} height={size}>
        <circle
          r={size / 2 - strokeWidth}
          cx={size / 2}
          cy={size / 2}
          strokeWidth={strokeWidth}
          stroke="white"
        />
        <circle
          fill="none"
          r={size / 2 - strokeWidth}
          cx={size / 2}
          cy={size / 2}
          strokeWidth={strokeWidth}
          stroke={strokeColor}
          strokeDasharray={125.65}
          transform="rotate(-90)"
          strokeDashoffset={100 - percent}
          strokeLinecap="round"
          style={{ transformOrigin: "center" }}
        />
        <text
          x={size / 2}
          y={size / 2}
          fill="white"
          fontSize="18px"
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressbar;
