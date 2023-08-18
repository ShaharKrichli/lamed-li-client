import { styled } from "@mui/material/styles";

// breakpoints for half screen and mobile
const halfScreenBreakpoint = "900px";
const mobileBreakpoint = "600px";

export const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "2rem",

  [`@media (max-width: ${mobileBreakpoint})`]: {
    padding: "1rem",
  },
});

export const Title = styled("h1")({
  fontSize: "1.5rem",
  display: "inline-block",
  marginBottom: "1rem",

  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
});

export const Prof = styled("div")({
  display: "flex",
  alignItems: "center",

  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
