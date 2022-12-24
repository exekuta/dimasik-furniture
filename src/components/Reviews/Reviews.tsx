import React from 'react';
import { Box, Typography } from '@mui/material';
import avatar01 from '../../assets/images/avatar01.jpg';
import avatar02 from '../../assets/images/avatar02.jpg';
import avatar03 from '../../assets/images/avatar03.jpg';
import reviewData from '../../assets/reviews';
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

      <Box component="div" className="reviews-posts-container">
        <Box component="div" className="reviews-item">
          <Box
            component="div"
            className="reviews-item-photo"
            sx={{ backgroundImage: `url(${avatar01})` }}
          ></Box>
          <Box component="div" className="reviews-item-tail"></Box>
        </Box>
        <Box component="div" className="reviews-item-text">
          {reviewData.map((item) => (
            <>
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
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
