// Material
import { ThemeProvider } from '@mui/material/styles';
import theme from 'components/layout/theme';
import CssBaseline from '@mui/material/CssBaseline';
// Roboto Fonts. Used by CssBaseline and affects fonts globally
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// Styles
import 'styles/globals.scss'
// Components
import Layout from 'components/layout/Layout.js'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp
