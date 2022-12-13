import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <Box component="div" className="main-container">
      <Box component="div" className="main-text-container">
        <Box component="div" className="main-text-bg-cover" />
        <Box component="div" className="main-text-flex">
          <Box component="div" className="main-text-wrapper">
            <Typography
              sx={{ fontSize: '52px', fontWeight: '600', letterSpacing: '1px' }}
              className="main-text-title"
            >
              Проектирование и сборка корпусной мебели с гарантией
            </Typography>
            <Typography
              sx={{ fontSize: '22px', fontWeight: '300', lineHeight: '1.55' }}
              component="span"
              className="main-text-subtitle"
            >
              Мы занимаемся проектированием и сборкой корпусной кухонной мебели и
              гарнитуров, гардеробных и шкафов-купе
            </Typography>
            <Box component="div" className="main-text-buttons">
              <Button variant="contained" className="button">
                Рассчитать стоимость
              </Button>
              <Button variant="outlined" className="button" sx={{ color: '#fff', borderColor: '#fff'}}>
                Услуги
              </Button>
            </Box>
          </Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
