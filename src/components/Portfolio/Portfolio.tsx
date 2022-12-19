import React from 'react';
import { Box, Typography } from '@mui/material';
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <Box component="div" className="portfolio-container">
      <Typography
        component="span"
        sx={{
          color: '#000',
          fontSize: '42px',
          fontWeight: '600',
          lineHeight: '1.23',
          marginBottom: '40px',
        }}
        className="portfolio-text-title"
      >
        Наши работы
      </Typography>
      <Typography
          component="span"
          sx={{
            color: '#000',
            fontSize: '22px',
            fontWeight: '300',
            lineHeight: '1.5',
            marginBottom: '60px',
          }}
          className="portfolio-text-subtitle"
        >
          Примеры выполненных работ, которыми гордится наша команда
        </Typography>
    </Box>
  )
}

export default Portfolio;