import { styled } from "@mui/material/styles";
import { margin } from "@mui/system";


// breakpoints for half screen and mobile
const halfScreenBreakpoint = "900px";
const mobileBreakpoint = "600px";


export const container = styled("div")({
  backgroundColor: "#f1fdf7",
  display: "flex",
  alignItems: "center",
  justifyContent: 'space-around',
  paddingBlock: '3rem',

  // Media query for half screen screens
  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    flexDirection: "column",
  },

  // Media query for mobile
  [`@media (max-width: ${mobileBreakpoint})`]: {
    flexDirection: "column",
    paddingBlock: '1rem',
  },
});

export const title = styled("div")({
  fontSize: "2rem",
  paddingBottom: '1.5rem',
});

export const AllBulletWrapper = styled("div")({
  width: "40rem",
  display: "flex",
  flexDirection:"column",

  // Media query for half screen screens
  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    width: "30rem",
  },

  // Media query for mobile
  [`@media (max-width: ${mobileBreakpoint})`]: {
    width: "25rem",
  },
});

export const CenterLeftImg = styled("img")({
  // width: "35rem", // deleted for now
  borderRadius: "20px",

  // Media query for half screen screens
  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    width: "30rem",
  },

  // Media query for mobile
  [`@media (max-width: ${mobileBreakpoint})`]: {
    width: "25rem",
  },
});

