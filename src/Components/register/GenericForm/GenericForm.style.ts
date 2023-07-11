import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FormFieldsGroup = styled('div')({
    margin: '50px',
    display: 'grid',
    gap: 15,
    height: 'fit-content',
    width: '300px'
})

export const FormTextField = styled(TextField)({
    display: 'grid',
    width: '300px',
    margin: '20px'
})

export const FormTitle = styled('div')({
    marginBottom: '5px',
    fontSize: '35px',
    justifySelf: "center"
})