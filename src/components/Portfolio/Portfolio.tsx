import React, { useState } from 'react';
import { Box, ImageList, ImageListItem, Link, Typography } from '@mui/material';
import { itemData } from '../../assets/images';
import Lightbox from './subcomponents/Lightbox/Lightbox';
import './Portfolio.scss';

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState(0);

  const handleOpen = (id: number) => {
    const clickedImage = itemData.find((image: { id: number }) => image.id === id);
    
    if (clickedImage?.id !== undefined) {
      setClickedImage(clickedImage?.id - 1);
    }
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  
  return (
    <Box component="div" className="portfolio-container" id="portfolio">
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
      <ImageList
        sx={{ width: 1200, height: 670 }}
        cols={4}
        rowHeight={330}
        gap={10}
      >
        {itemData.map((item) => (
          <Link key={item.id} onClick={() => handleOpen(item.id)}>
            <ImageListItem sx={{ height: '330px', cursor: 'zoom-in', objectFit: 'cover' }}>
              <img
                src={item.img}
                srcSet={item.img}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
      <Lightbox showModal={open} closeModal={handleClose} clickedImage={clickedImage}/>
    </Box>
  );
};

export default Portfolio;
