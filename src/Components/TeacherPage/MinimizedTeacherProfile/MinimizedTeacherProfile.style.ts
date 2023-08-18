import { styled } from "@mui/material/styles";

// breakpoints for half screen and mobile
const halfScreenBreakpoint = "900px";
const mobileBreakpoint = "600px";

export const container = styled("div")({
  height: '5rem',
  background: 'linear-gradient(to top, #09203f 0%, #537895 100%)',
  display: "flex",
  alignItems: "center",
  justifyContent: 'flex-start', // Adjusted to 'flex-end'
  padding: '0.5rem', // Adjusted to '0.5rem'
  position: 'sticky',
  top: '0',

  // Media query for half screen screens
  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    flexDirection: "column",
    alignItems: "center", // Adjusted to 'center'
    justifyContent: 'center', // Adjusted to 'center'
    padding: '1rem', // Adjusted to '1rem'
  },

  // Media query for mobile
  [`@media (max-width: ${mobileBreakpoint})`]: {
    flexDirection: "column",
    alignItems: "center", // Adjusted to 'center'
    justifyContent: 'center', // Adjusted to 'center'
    padding: '1rem',
  },
});

export const profileImage = styled("img")({
  width: "5rem",
  borderRadius: "20px",
  marginRight: '2rem',

  // Media query for half screen screens
  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    width: "10rem", // Adjusted to '10rem'
    marginRight: 0, // Removed the margin for smaller screens
    marginBottom: '1rem', // Added margin for spacing
  },

  // Media query for mobile
  [`@media (max-width: ${mobileBreakpoint})`]: {
    width: "7rem", // Adjusted to '7rem'
    marginRight: 0,
    marginBottom: '1rem',
  },
});

export const teacherName = styled("div")({
  fontSize: '20px',
  color: 'white',
  margin: '1rem',

  // Media query for half screen screens
  [`@media (max-width: ${halfScreenBreakpoint})`]: {
    fontSize: '16px', // Adjusted font size for smaller screens
  },

  // Media query for mobile
  [`@media (max-width: ${mobileBreakpoint})`]: {
    fontSize: '16px',
  },
});
