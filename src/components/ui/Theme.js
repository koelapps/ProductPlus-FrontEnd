import { createMuiTheme } from '@material-ui/core/styles';

const prodBlue = '#0B72B9';
const prodOrange = '#FFBA60';

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
  },
});
