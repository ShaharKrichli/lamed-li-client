import { styled } from "@mui/material/styles";

// breakpoints for half screen and mobile
const halfScreenBreakpoint = "900px";
const mobileBreakpoint = "600px";

export const Container = styled("div")({
  height: '6rem',
  background: 'linear-gradient(to top, #09203f 0%, #537895 100%)',
  display: "flex",
  alignItems: "center",
  justifyContent: 'flex-end', // Change 'right' to 'flex-end'
  padding: '3rem', // Change 'paddingBlock' to 'padding'
  // transition: 'background 1s ease, height 1s ease, top 1s ease',
  
  // Media query for half screen screens
  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    flexDirection: "column",
  },

  // Media query for mobile
  [`@media (max-width: ${mobileBreakpoint})`]: {
    flexDirection: "column",
    padding: '1rem', // Change 'paddingBlock' to 'padding'
  },
});

export const ProfileImage = styled("img")({
  width: "15rem", 
  borderRadius: "20px",
  marginRight: '2rem',

  // Media query for half screen screens
  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    display: "none"
  },

  // Media query for mobile
  [`@media (max-width: ${mobileBreakpoint})`]: {
    display: "none"
  },
});

export const PersonalDetails = styled("div")({
  width: "40rem",
  height: "10rem",
  display: "flex",
  flexDirection: "column",
  color: 'white',
  fontSize: '10px',
  fontWeight: '300',
  margin: '2rem',

  // Media query for half screen screens
  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    width: "30rem",
  },

  // Media query for mobile
  [`@media (max-width: ${mobileBreakpoint})`]: {
    width: "25rem",
  },
});

export const TeacherName = styled("div")({
  fontSize: '20px',
  paddingBottom: '1rem',
});

export const ShortDescription = styled("div")({
  fontSize: '16px',
  paddingBottom: '1rem',
  fontWeight: '700',
});

export const Detail = styled("div")({
  fontSize: '16px',
  paddingBottom: '.5rem',
});
