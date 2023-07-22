import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LandingContainer = styled('div')({
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    background: ' linear-gradient(to top, #09203f 0%, #537895 100%);',
    padding: '1.5rem 3rem 0 2rem',
    // Responsive styles for smaller screens
    '@media (max-width: 600px)': {
      padding: '1rem 2rem 0',
    }
});

export const NavbarContainer = styled('div')({
    display: 'flex',
    color: 'white',
    fontSize: '1rem',
    // Responsive styles for smaller screens
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'center',
    }
});

export const NavbarElement = styled('div')({
    marginLeft: '2rem',
    cursor: 'pointer',
});

export const CenterContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    color: 'white',
    alignItems: 'center',
    height: '500px',
    // Responsive styles for smaller screens
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      height: 'auto',
    }
});

export const MainTitle = styled('div')({
    fontSize: '4rem',
    color: 'white',
    // Responsive styles for smaller screens
    '@media (max-width: 600px)': {
      fontSize: '3rem',
    }
});

export const CenterLeftImg = styled('img')({
    height: '325px',
    width: '325px',
    // Responsive styles for smaller screens
    '@media (max-width: 600px)': {
      height: '200px',
      width: '200px',
    },
    // Hide the image at 785 pixels width
    '@media (max-width: 785px)': {
      display: 'none',
    }
});

export const ButtonsContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5rem',
    backgroundColor: 'lightgray',
    // Responsive styles for smaller screens
    '@media (max-width: 600px)': {
      height: 'auto',
    }
});

export const LandingBtn = styled('div')({
    marginRight: '1rem',
    backgroundColor: 'rgb(63, 76, 119)',
    color: 'white',
    borderRadius: '25px',
    height: '3rem',
    width: '12rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    // Responsive styles for smaller screens
    '@media (max-width: 600px)': {
      margin: '0.5rem 0',
      width: '100%',
    }
});

export const CenterPopularContainer = styled('div')({
    display: 'flex',
    marginTop: '1rem',
    marginRight: '1rem',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // Responsive styles for smaller screens
    '@media (max-width: 600px)': {
      flexDirection: 'column',
    }
});

export const CenterPopularOption = styled('div')({
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: '1px solid #fff',
    borderRadius: '40px',
    color: ' #fff',
    fontWeight: '600',
    lineHeight: '24px',
    padding: ' 1px 12px 0',
    transition: 'all .2s ease-in-out',
    zIndex: '4',
    ":hover": {
        backgroundColor: 'white',
        color: 'black'
    }
});

export const AutocompleteInput = styled(TextField)(({ theme }) => ({
    marginBottom: '1.75rem !important',

    '.MuiInputBase-root': {
        paddingRight: '50px'
    },

    '.MuiOutlinedInput-root': {
        borderRadius: '1.625rem',
        fontSize: '1.125rem',

        '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#868686',
        },
        '&.Mui-focused': {
            '.MuiOutlinedInput-notchedOutline': {
                borderColor: '#5755F8',
                borderWidth: 1,
            },
        },
        '&.Mui-error': {
            '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'red',
            },
        }
    },
    '.MuiOutlinedInput-input': {
        padding: '0.9375rem 1.25rem',
        fontFamily: theme.typography.fontFamily,
    },
    '.MuiFormHelperText-root': {
        fontSize: '0.9375rem',
        lineHeight: 1.27,
        margin: '0 1.25rem -1.5625rem',
        padding: '0.375rem 0 0',
        textAlign: 'start',

        '&.Mui-error': {
            color: 'red',
        }
    },
    // Responsive styles for smaller screens
    '@media (max-width: 600px)': {
      marginBottom: '1rem !important',
      '.MuiOutlinedInput-input': {
        padding: '0.75rem 1rem',
      },
      '.MuiFormHelperText-root': {
        fontSize: '0.875rem',
        margin: '0 1rem -1rem',
      }
    }
}))
