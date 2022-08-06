import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// Create a theme instance.
let theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      section: grey[800],
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
