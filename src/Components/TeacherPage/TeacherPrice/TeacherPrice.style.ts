import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// breakpoints for half screen and mobile
const halfScreenBreakpoint = "900px";
const mobileBreakpoint = "600px";

export const Container = styled("div")({
    position: 'fixed',
    top: 0,
    left: 70,
    display: 'flex',
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: 'center', // Center vertically
    borderRadius: '50px',
    background: 'linear-gradient(145deg, #cacaca, #f0f0f0)',
    boxShadow: '27px 27px 54px #bebebe, -27px -27px 54px #ffffff',
    padding: '20px',
    width: "15rem",
    height: "15rem",
    zIndex: 999,
});

export const Title = styled("div")({
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom:"2rem",
    color: '#333',
    marginLeft: '10px', // Add some space between the edge and text
});
export const TeacherPrice = styled("div")({
    display: "flex",
    flexDirection: "column",
    marginTop: "1.5rem"
})

