import { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import settings from '../../content/settings.json';
import site from '../../content/site.json';

const navItems = [
  { id: 'home', label: site.navigation.home },
  { id: 'about', label: site.navigation.about },
  { id: 'services', label: site.navigation.services },
  { id: 'approach', label: site.navigation.approach },
  { id: 'who-i-work-with', label: site.navigation.whoIWorkWith },
  { id: 'qualifications', label: site.navigation.qualifications },
  { id: 'contact', label: site.navigation.contact },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuAnchor(null);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        height: { xs: 64, sm: 72 },
        boxSizing: 'border-box',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid #D7E4E2' : '1px solid transparent',
        boxShadow: scrolled ? '0 6px 24px rgba(31, 63, 62, 0.08)' : 'none',
        transition: 'background-color 220ms ease, border-color 220ms ease, box-shadow 220ms ease',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <Toolbar sx={{ maxWidth: 1100, width: '100%', height: '100%', minHeight: '0 !important', mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
            {settings.therapist_name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: { xs: 'none', sm: 'block' },
              color: scrolled ? 'text.secondary' : '#3F7F7B',
              transition: 'color 220ms ease',
            }}
          >
            {settings.location}
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: { sm: 0.75, lg: 1.25 } }}>
          {navItems.map((item) => (
            <Button key={item.id} color="primary" onClick={() => scrollTo(item.id)} sx={{ px: { sm: 1.25, lg: 1.5 } }}>
              {item.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <IconButton
            color="primary"
            aria-label="Open navigation menu"
            onClick={(event) => setMenuAnchor(event.currentTarget)}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={() => setMenuAnchor(null)}
          >
            {navItems.map((item) => (
              <MenuItem key={item.id} onClick={() => scrollTo(item.id)}>
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
