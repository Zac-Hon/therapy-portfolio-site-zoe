import Nav from './Nav.jsx';
import { Box } from '@mui/material';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <Box sx={{ pt: { xs: 8, sm: 9 } }}>
        {children}
      </Box>
    </>
  );
}
