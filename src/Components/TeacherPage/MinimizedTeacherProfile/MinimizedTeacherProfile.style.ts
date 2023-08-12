import { styled } from "@mui/material/styles";

// breakpoints for half screen and mobile
const halfScreenBreakpoint = "900px";
const mobileBreakpoint = "600px";


export const container = styled("div")({
  height:'4rem',
  background: 'linear-gradient(to top, #09203f 0%, #537895 100%);',
  display: "flex",
  alignItems: "center",
  justifyContent: 'right',
  paddingBlock: '0.5rem',
  position: 'sticky',
  top: '0',
  // transition: 'background 1s ease, height 1s ease, top 1s ease',
  
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
  width: "5rem", 
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



export const teacherName = styled("div")({
  fontSize: '20px',
  color: 'white',
  margin: '1rem',
});







