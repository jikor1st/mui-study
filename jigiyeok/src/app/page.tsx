"use client";
import { Button, css, styled, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Typography variant="h1" color="primary">
        h1 primary
      </Typography>
      <Typography variant="customFont" color="secondary">
        CustomFont secondary
      </Typography>
      <CustomFont>CustomFont Component</CustomFont>
    </div>
  );
}

const CustomFont = styled("p", {
  name: "CustomFont",
  slot: "root",
})`
  ${({ theme }) => css`
    font-size: ${theme.typography.customFont.fontSize};
    font-weight: ${theme.typography.customFont.fontWeight};
    line-height: ${theme.typography.customFont.lineHeight};
  `}
`;
