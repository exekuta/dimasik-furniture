import React from 'react';
import { Box, Typography } from '@mui/material';
import './Reviews.scss';

const Reviews = () => {
  return (
    <Box component="div" className="reviews-container">
      <Typography
        component="span"
        sx={{
          color: '#000',
          fontSize: '42px',
          fontWeight: '600',
          lineHeight: '1.23',
        }}
      >
        Отзывы наших клиентов
      </Typography>
      <Box component="div" className="reviews-posts-container">

      </Box>
    </Box>
  )
}

export default Reviews