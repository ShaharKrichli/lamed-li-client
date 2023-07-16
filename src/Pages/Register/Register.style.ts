import { Backdrop } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

export const registerContainer = styled('div')({
    background: 'linear-gradient(to top, #09203f 0%, #537895 100%);',
    height: '110vh',
    
});


export const regiserBackgroundImage = styled('img')({
    height: '20vh',
    width: '100%',
    rotate: '180deg',
});

export const registerForm = styled('div')({
    position: 'relative',
    bottom: '5%',
    margin: '5%',
    paddingTop: '3rem',
    width: '25vw',
    background: 'rgba(140, 224, 233, 0.74)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(12.8px)',
    WebkitBackdropFilter: 'blur(12.8px)',
    border: '1px solid rgba(140, 224, 233, 1)',
});