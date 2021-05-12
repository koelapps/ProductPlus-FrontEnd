import { createMuiTheme } from '@material-ui/core/styles';

const prodBlue = '#0B72B9';
const prodOrange = '#FFBA60';
const arcGrey = '#868686';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${prodBlue}`,
      orange: `${prodOrange}`,
    },
    primary: {
      main: `${prodBlue}`,
    },
    secondary: {
      main: `${prodOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '0.9rem',
    },
    estimate: {
      fontFamily: 'pacifico',
      fontSize: '1rem',
      textTransform: 'none',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: prodBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'pacifico',
      fontSize: '2.5rem',
      color: prodBlue,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: prodBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    body1: {
      fontSize: '1.25rem',
      color: arcGrey,
      fontWeight: 300,
    },
    learnButton: {
      borderColor: prodBlue,
      color: prodBlue,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
  },
});
