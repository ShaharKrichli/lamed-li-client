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
  height: 'fit-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  cursor: 'pointer',
  '&:hover': {
    '& span::before': {
      transform: 'scaleX(1)',
    },
  },
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

export const proffesionText = styled('p')({
  marginTop: '5px',
  fontSize: '20px',
});

export const proffesionLine = styled('span')({
  position: 'relative',
  width: '50px',
  backgroundColor: '#B0B0B0',
  height: '2px',
  textDecoration: 'none',
  '&:hover': {
    color: '#000',
  },
  '&::before': {
    content: "'    '",
    position: 'absolute',
    display: 'block',
    width: '50px',
    height: '2px',
    bottom: 0,
    left: 0,
    backgroundColor: '#000',
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease',
  },
});