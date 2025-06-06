import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function HogwartsLoadingSpinner() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient
            id="hogwarts_gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            {/* Gryffindor Red */}
            <stop offset="0%" stopColor="#740001" />
            {/* Hufflepuff Yellow */}
            <stop offset="33%" stopColor="#1A472A" />
            {/* Slytherin Green */}
            <stop offset="66%" stopColor="#FFD700" />
            {/* Ravenclaw Blue */}
            <stop offset="100%" stopColor="#222F5B" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        sx={{ "svg circle": { stroke: "url(#hogwarts_gradient)" } }}
        size={100} // Adjust size as needed
        thickness={6} // Adjust thickness as needed
        disableShrink
      />
    </React.Fragment>
  );
}
