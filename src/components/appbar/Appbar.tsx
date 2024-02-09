import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Headerbar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 20 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DASHBOARD
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Service</Button>
          <Button color="inherit">Gallery</Button>
          <Button color="inherit">Contact Us</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Headerbar;