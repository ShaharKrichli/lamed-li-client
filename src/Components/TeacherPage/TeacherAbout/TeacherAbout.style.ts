import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

// Define the box-shadow values
const boxShadow = "5px 6px 29px 6px rgba(0,0,0,0.91)";

// breakpoints for half screen and mobile
const halfScreenBreakpoint = "900px";
const mobileBreakpoint = "600px";

export const Title = styled("h1")({
  fontSize: "1.5rem",
  display: "inline-block",
});

export const Container = styled(Box)(({ theme }) => ({
  width: "50%",
  height: "160px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: boxShadow,
  display: "flex",
  flexDirection: "column",
  marginRight: "3rem",
  alignItems: "flex-start",
  justifyContent: "space-around",
  padding: "1rem",
  marginTop: "3rem",

  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "0.5rem",
    marginTop: "1rem",
    marginRight: 0,
  },

  [`@media (max-width: ${mobileBreakpoint})`]: {
    flexDirection: "column",
    padding: "0.5rem",
    marginTop: "1rem",
    marginRight: 0,
  },
}));

export const PersonalDetails = styled(Box)(({ theme }) => ({
  width: "90%",
  display: "flex",
  flexDirection: "column",

  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    width: "100%",
    alignItems: "center",
    marginTop: "1rem",
  },

  [`@media (max-width: ${mobileBreakpoint})`]: {
    width: "100%",
    alignItems: "center",
    marginTop: "1rem",
  },
}));

export const Description = styled("div")({
  fontSize: "1rem",
  paddingBottom: "1rem",
});
