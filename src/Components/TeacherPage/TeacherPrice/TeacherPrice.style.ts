import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// breakpoints for half screen and mobile
const halfScreenBreakpoint = "900px";
const mobileBreakpoint = "600px";

export const Container = styled("div")({
    position: 'fixed',
    top: 0,
    left: '10%', // Use percentage instead of pixels
    display: 'flex',
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: 'center', // Center vertically
    borderRadius: '50px',
    background: 'linear-gradient(145deg, #cacaca, #f0f0f0)',
    boxShadow: '2.5em 2.5em 5em #bebebe, -2.5em -2.5em 5em #ffffff', // Use em units for box shadow
    padding: '2em', // Use em units for padding
    width: "15rem",
    height: "12rem",
    zIndex: 999,

    // Media query for half screen screens
    [`@media (max-width: ${halfScreenBreakpoint})`]: {
        width: "12rem", // Adjust as needed
        height: "12rem", // Adjust as needed
        padding: '1.5em', // Adjust as needed
    },

    // Media query for mobile
    [`@media (max-width: ${mobileBreakpoint})`]: {
        width: "10rem", // Adjust as needed
        height: "7rem", // Adjust as needed
        padding: '1em', // Adjust as needed
    },
});

export const Title = styled("div")({
    fontSize: '1.2em', // Use em units for font size
    fontWeight: 'bold',
    marginBottom: "1.5em", // Use em units for margin
    color: '#333',
    marginLeft: '0.6em', // Use em units for margin
});

export const TeacherPrice = styled("div")({
    display: "flex",
    flexDirection: "column",
    marginTop: "1.5em", // Use em units for margin

    // Media query for mobile
    [`@media (max-width: ${mobileBreakpoint})`]: {
        display: "none", // Hide the component
    },
});
