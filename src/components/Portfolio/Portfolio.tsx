import React from 'react';
import { Box, ImageList, ImageListItem, Link, Typography } from '@mui/material';
import itemData from '../../assets/images';
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
      <ImageList sx={{ width: 1200, height: 665 }} cols={4} rowHeight={330} gap={10}>
        {itemData.map((item) => (
          <Link>
            <ImageListItem key={item.img} sx={{ height: '330px' }}>
              <img
                src={item.img}
                srcSet={item.img}
                alt={item.title}
                loading="lazy"
                className="portfolio-image-item"
              />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </Box>
  );
};

export default Portfolio;
