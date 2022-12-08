import { AppBar, Box, Typography } from '@mui/material';
import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <AppBar
      position="static"
      className="header-container"
      sx={{ boxShadow: 'none' }}
    >
      <Box component="nav" className="navigation">
        <Typography variant="h6">DIMASIK</Typography>
      </Box>
    </AppBar>
  );
};

export default Header;
