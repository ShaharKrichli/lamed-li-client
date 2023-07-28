import { styled } from "@mui/material/styles";
import { margin } from "@mui/system";

// export const container = styled("div")({
//   backgroundColor: "#f1fdf7",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: 'space-around',
//   paddingBlock: '3rem'
// });

// export const title = styled("div")({
//   fontSize: "2rem",
//   paddingBottom: '1.5rem',
// });

// export const AllBulletWrapper = styled("div")({
//   width: "40rem",
// });

// export const CenterLeftImg = styled("img")({
//   width: "35rem",
//   borderRadius: "20px",
// });


// breakpoints consts
const extraLargeScreenBreakpoint = "1500px";
const largeScreenBreakpoint = "1150px";
const smallScreenBreakpoint = "850px";
const tabletScreenBreakpoint = "650px";
const largeMobileScreenBreakpoint = "500px";
const regularMobileBreakpoint = "380px";



export const container = styled("div")({
  backgroundColor: "#f1fdf7",
  display: "flex",
  alignItems: "center",
  justifyContent: 'space-around',
  paddingBlock: '3rem',

  // Media query for extra-large screens
  [`@media (max-width: ${extraLargeScreenBreakpoint})`]: {
    flexDirection: "column",
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

  // Media query for extra-large screens
  [`@media (max-width: ${extraLargeScreenBreakpoint})`]: {
    width: "70rem",
  },
  // Media query for large screens
  [`@media (max-width: ${largeScreenBreakpoint})`]: {
    width: "50rem",
  },
  // Media query for small screens
  [`@media (max-width: ${smallScreenBreakpoint})`]: {
    width: "40rem",
  },
  // Media query for tablet screens
  [`@media (max-width: ${tabletScreenBreakpoint})`]: {
    width: "30rem",
  },
  // Media query for large mobile screens
  [`@media (max-width: ${largeMobileScreenBreakpoint})`]: {
    width: "20rem",
  },

  // Media query for regular mobile screens
  [`@media (max-width: ${regularMobileBreakpoint})`]: {
    width: "15rem",
  },
});

export const CenterLeftImg = styled("img")({
  width: "50rem", 
  borderRadius: "20px",

  // Media query for extra-large screens
  [`@media (max-width: ${extraLargeScreenBreakpoint})`]: {
    width: "70rem",
  },
  // Media query for large screens
  [`@media (max-width: ${largeScreenBreakpoint})`]: {
    width: "50rem",
  },
  // Media query for small screens
  [`@media (max-width: ${smallScreenBreakpoint})`]: {
    width: "40rem",
  },
  // Media query for tablet screens
  [`@media (max-width: ${tabletScreenBreakpoint})`]: {
    width: "30rem",
  },
  // Media query for large mobile screens
  [`@media (max-width: ${largeMobileScreenBreakpoint})`]: {
    width: "20rem",
  },

  // Media query for regular mobile screens
  [`@media (max-width: ${regularMobileBreakpoint})`]: {
    width: "15rem",
  },
});

