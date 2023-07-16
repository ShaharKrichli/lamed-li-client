import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FormTextField = styled(TextField)({
    display: 'flex',
    height: 'auto',
    margin: '0.5rem',
    '& label': {
        paddingRight: '1rem',
        left: 'auto',
        textAlign:'right',
      },
      '& legend':{
        left: 'auto',
        textAlign:'right',
      }
})