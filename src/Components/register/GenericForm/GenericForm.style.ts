import { color, styled } from '@mui/system';
import TextField from '@mui/material/TextField';

export const FormFieldsGroup = styled('div')({
  display: 'flex',
  gap: '1.5em',
  height: 'fit-content',
  flexDirection: 'column',
  alignItems: 'center',
  '@media (max-width: 600px)': {
    margin: '3vw',
  },
});

export const FormTextField = styled(TextField)({
  display: 'flex',
  width: '100%',
  margin: '2em',
  '@media (max-width: 600px)': {
    margin: '1em',
  },
});

export const FormTitle = styled('div')({
  marginBottom: '0.25em', 
  fontSize: '2.5vw',
  justifySelf: 'center',
  '@media (max-width: 600px)': {
    fontSize: '2vw',
  },
});
