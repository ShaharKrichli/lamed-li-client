import { styled } from "@mui/material/styles";

export const proffesionsArea = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '345px',
    width: '70%',
    margin: 'auto'
});

export const proffesionBox = styled('div')({
    margin: '0 50px 0',
    width: '150px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
});

export const proffesionImg = styled('img')({
    marginBottom: '5px',
    height: '40px',
    webkiTransition: 'opacity .3s ease-in-out',
    width: '40px',
    cursor: 'pointer',
    ":hover": {
        opacity: '0.8',
    },
});

export const proffesionText = styled('div')({
    marginTop: '5px',
    fontSize: '20px',
});

export const proffesionLine = styled('div')({
    height: '20px',
    width: '20px',
    backgroundColor: 'red',
    margin: '5px 0 5px'
});