import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import './Prices.scss';

const Prices = () => {
  return (
    <Box component="div" className="prices-container">
      <Box component="div" className="prices-bg-cover" />
      <Box component="div" className="prices-title">
        <Typography
          component="span"
          sx={{
            color: '#fff',
            fontSize: '42px',
            fontWeight: '600',
            lineHeight: '1.23',
          }}
        >
          Расчет стоимости ремонта бесплатно
        </Typography>
      </Box>
      <Box component="div" className="prices-subtitle">
        <Typography
          component="span"
          sx={{
            color: '#fff',
            fontSize: '24px',
            fontWeight: '300',
            lineHeight: '1.5',
          }}
        >
          С вами свяжется наш замерщик и приедет в удобное время. Мы составим
          расчет в течение 24 часов и свяжемся с вами
        </Typography>
      </Box>
      <Box component="div">
        <form className="prices-inputs">
          <input type="text" placeholder="Имя" className='input-item'></input>
          <input type="text" placeholder="Телефон" className='input-item'></input>
          <input type="text" placeholder="e-mail" className='input-item'></input>
          {/* <button type="submit" className='submit-button'>Отправить заявку</button> */}
          <Button
            variant="contained"
            color="warning"
            sx={{
              color: '#fff',
              textTransform: 'none',
              height: '56px',
              padding: '0 30px 0 30px',
              fontWeight: '700',
              fontSize: '14px',
            }}
          >
            Отправить заявку
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Prices;
