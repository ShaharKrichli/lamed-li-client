import { styled } from "@mui/material/styles";

// breakpoints for half screen and mobile
const halfScreenBreakpoint = "900px";
const mobileBreakpoint = "600px";

export const container = styled("div")({
  height: "5rem",
  background: "linear-gradient(to top, #09203f 0%, #537895 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "0.5rem",
  position: "sticky",
  top: "0",

  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },

  [`@media (max-width: ${mobileBreakpoint})`]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },
});

export const profileImage = styled("img")({
  width: "5rem",
  borderRadius: "20px",
  marginRight: "2rem",

  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    width: "10rem",
    marginRight: 0,
    marginBottom: "1rem",
  },

  [`@media (max-width: ${mobileBreakpoint})`]: {
    width: "7rem",
    marginRight: 0,
    marginBottom: "1rem",
  },
});

export const teacherName = styled("div")({
  fontSize: "20px",
  color: "white",
  margin: "1rem",

  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    fontSize: "16px",
  },

  [`@media (max-width: ${mobileBreakpoint})`]: {
    fontSize: "16px",
  },
});
