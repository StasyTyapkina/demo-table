import React from "react";
import { styled } from "@mui/system";
import { Typography, Box } from "@mui/material";

export const StyledFooter = styled(Box)(() => ({
  position: "fixed",
  bottom: 0,
  width: "100%",
  textAlign: "center",
  padding: "8px",
  backgroundColor: "#f5f5f5",
}));

export const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Demo table. All rights reserved.
      </Typography>
    </StyledFooter>
  );
};
