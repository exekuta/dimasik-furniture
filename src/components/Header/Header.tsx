import { AppBar, Box, Link, Typography } from '@mui/material';
import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <AppBar
      position="static"
      className="header-container"
      color="inherit"
      sx={{ boxShadow: 'none', backgroundColor: '#000' }}
    >
      <Box component="nav" className="navigation">
        <Link href="#top" underline="none" color="white" className="nav-title">
          ДИМАСИК
        </Link>
        <Box component="div" className="nav-links">
          <Typography component="span" className="nav-item">
            <Link href="#services" underline="none" color="white" className="nav-links">
              Услуги
            </Link>
            <Link href="#portfolio" underline="none" color="white" className="nav-links">
              Работы
            </Link>
            <Link href="#calc" underline="none" color="white" className="nav-links">
              Расчет
            </Link>
            <Link href="#contacts" underline="none" color="white" className="nav-links">
              Контакты
            </Link>
          </Typography>
        </Box>
        <Box component="div">
          <Typography component="span" className="nav-contacts" color="white">
            +123 356 653 78
          </Typography>
          <Typography component="span" className="nav-contacts" color="white">
            Пн.–Сб. 9:00–21:00
          </Typography>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
