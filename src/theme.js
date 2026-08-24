import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3F7F7B',
      dark: '#2D625F',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F7F8',
    },
    text: {
      primary: '#20302F',
      secondary: '#52615F',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Avenir Next", "Trebuchet MS", sans-serif',
    h1: { fontFamily: '"Trebuchet MS", "Avenir Next", sans-serif', fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', lineHeight: 1.05, fontWeight: 600 },
    h2: { fontFamily: '"Trebuchet MS", "Avenir Next", sans-serif', fontSize: 'clamp(1.9rem, 3vw, 2.7rem)', lineHeight: 1.15, fontWeight: 600 },
    h3: { fontFamily: '"Trebuchet MS", "Avenir Next", sans-serif', fontSize: '1.4rem', fontWeight: 600 },
    body1: { fontSize: '1.05rem', lineHeight: 1.6 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 2, textTransform: 'none', fontWeight: 700 },
      },
    },
    MuiTextField: {
      defaultProps: { size: 'medium' },
    },
  },
});

export default theme;
