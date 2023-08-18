import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// breakpoints for half screen and mobile
const halfScreenBreakpoint = "900px";
const mobileBreakpoint = "600px";

export const Container = styled("div")({
  position: "fixed",
  top: 0,
  left: "10%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  borderRadius: "50px",
  background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
  boxShadow: "2.5em 2.5em 5em #bebebe, -2.5em -2.5em 5em #ffffff",
  padding: "2em",
  width: "15rem",
  height: "12rem",
  zIndex: 999,

  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    width: "12rem",
    height: "12rem",
    padding: "1.5em",
  },

  [`@media (max-width: ${mobileBreakpoint})`]: {
    width: "10rem",
    height: "7rem",
    padding: "1em",
  },
});

export const Title = styled("div")({
  fontSize: "1.2em",
  fontWeight: "bold",
  marginBottom: "1.5em",
  color: "#333",
  marginLeft: "0.6em",
});

export const TeacherPrice = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "1.5em",

  [`@media (max-width: ${mobileBreakpoint})`]: {
    display: "none",
  },
});
