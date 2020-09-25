import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'

const arcBlue = '#0B72B9'
const arcOrange = '#FFBA60'
const arcGrey = '#868686'

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem',
            color: 'white'
        },
        estimate: {
            fontFamily: 'Pacifico',
            fontSize: '1.3rem',
            textTransform: 'none',
            color: 'white'
        },
        h2: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '2.5rem',
            color: `${arcBlue}`,
            lineHeight: 1.5
        },
        h3: {
            fontFamily: 'Pacifico',
            fontSize: '2.5rem',
            color: `${arcBlue}`
        },
        h4: {
            fontFamily: 'Raleway',
            fontSize: '1.75rem',
            color: `${arcBlue}`,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: '1.25rem',
            color: `${arcGrey}`,
            fontWeight: 300
        },
        subtitle2: {
            fontSize: '1.25rem',
            color: 'white',
            fontWeight: 300
        },
        body1: {
            fontSize: '1.25rem',
            color: arcGrey,
            fontWeight: 300
        },
        learnButton: {
            borderColor: `${arcBlue}`,
            color: `${arcBlue}`,
            borderWidth: 2,
            textTransform: 'none',
            borderRadius: 50,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
        },
        caption: {
            fontSize: '1rem',
            fontWeight: 300,
            color: arcGrey
        }
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: arcBlue,
                fontSize: '1rem'
            }
        },
        MuiInput: {
            root: {
                color: arcGrey,
                fontWeight: 300
            },
            underline: {
                '&:before': { //before we click on the text input
                    borderBottom: `2px solid ${arcBlue}`
                },
                '&:hover:not($disabled):not($focused):not($error):before': {
                    borderBottom: `2px solid ${arcBlue}`
                }
            }
        }
    }
})