import { styled } from "@mui/material/styles";
import { margin } from "@mui/system";


// breakpoints for half screen and mobile
const halfScreenBreakpoint = "900px";
const mobileBreakpoint = "600px";


export const container = styled("div")({
  height:'12rem',
  background: 'linear-gradient(to top, #09203f 0%, #537895 100%);',
  display: "flex",
  alignItems: "center",
  justifyContent: 'right',
  paddingBlock: '3rem',
  border: '0.1rem solid green',
  

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

export const profileImage = styled("img")({
  width: "17rem", 
  borderRadius: "20px",
  marginRight:'2rem',

  // Media query for half screen screens
  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    width: "30rem",
  },

  // Media query for mobile
  [`@media (max-width: ${mobileBreakpoint})`]: {
    width: "25rem",
  },
});

export const personalDetails = styled("div")({
  width: "40rem",
  height:"10rem",
  display: "flex",
  flexDirection:"column",
  color: 'white',
  fontSize: '10px',
  fontWeight: '300',
  margin:'2rem',


  // Media query for half screen screens
  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    width: "30rem",
  },

  // Media query for mobile
  [`@media (max-width: ${mobileBreakpoint})`]: {
    width: "25rem",
  },
});

export const teacherName = styled("div")({
  fontSize: '20px',
  paddingBottom: '1rem',
});

export const shortDescription = styled("div")({
  fontSize: '16px',
  paddingBottom: '1rem',
  fontWeight:'700',
});

export const detail = styled("div")({
  fontSize: '16px',
  paddingBottom: '.5rem',
});





