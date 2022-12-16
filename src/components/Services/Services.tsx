import React from 'react';
import { Box, Typography } from '@mui/material';
import './Services.scss';

const Services = () => {
  return (
    <Box component="div" className="services-container" id="services">
      <Box component="div" className="services-text-container">
        <Typography
          component="span"
          sx={{ color: '#000', fontSize: '42px', fontWeight: '600', lineHeight: '1.23', marginBottom: '40px' }}
          className="services-text-title"
        >
          Наши услуги
        </Typography>
        <Typography
          component="span"
          sx={{ color: '#000', fontSize: '22px', fontWeight: '300', lineHeight: '1.5', marginBottom: '105px'  }}
          className="services-text-subtitle"
        >
          Мы занимаемся проектированием и сборкой
          <br />
          корпусной кухонной мебели и гарнитуров, 
          <br />
          гардеробных и шкафов-купе
          <br />
          НУЖНО ЕЩЕ ТЕКСТА!
        </Typography>
      </Box>
      
    </Box>
  )
}

export default Services
