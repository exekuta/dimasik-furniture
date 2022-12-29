import React from 'react';
import { Box, Typography } from '@mui/material';
import reviewData from '../../assets/data/reviews';
import './Reviews.scss';

const Reviews = () => {
  return (
    <Box component="div" className="reviews-container">
      <Box component="div" className="reviews-title">
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
      </Box>

      {reviewData.map((item) => (
        <Box component="div" className="reviews-posts-container">
          <Box component="div" className="reviews-item">
            <Box
              component="div"
              className="reviews-item-photo"
              sx={{ backgroundImage: `url(${item.img})` }}
            ></Box>
            <Box component="div" className="reviews-item-tail"></Box>
            <Box component="div" className="reviews-item-text">
              <Typography
                component="span"
                className="reviews-item-title"
                sx={{
                  fontSize: '16px',
                  fontWeight: '600',
                  lineHeight: '1.35',
                  textAlign: 'start',
                }}
              >
                {item.nickname}
              </Typography>
              <Typography
                component="span"
                className="reviews-item-subtitle"
                sx={{
                  fontSize: '15px',
                  fontWeight: '300',
                  lineHeight: '1.55',
                  marginTop: '10px',
                  textAlign: 'start',
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Reviews;
