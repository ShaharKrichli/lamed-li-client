import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';

export const FormFieldsGroup = styled('div')({
  margin: '5vw',
  display: 'grid',
  gap: '1.5em',
  height: 'fit-content',
  width: '70vw',
  '@media (max-width: 600px)': {
    width: '90vw',
    margin: '3vw',
  },
});

export const FormTextField = styled(TextField)({
  display: 'grid',
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
