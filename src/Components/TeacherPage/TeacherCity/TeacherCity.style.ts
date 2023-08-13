import { styled } from "@mui/material/styles";



// breakpoints for half screen and mobile
const halfScreenBreakpoint = "900px";
const mobileBreakpoint = "600px";

export const Container = styled("div")({
display:"flex",
flexDirection: "column",
alignItems: 'flex-start'
})
export const Title = styled("h1")({
    fontSize: "1.5rem",
    display: "inline-block",
})

