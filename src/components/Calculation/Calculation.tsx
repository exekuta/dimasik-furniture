import React from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import './Calculation.scss';

const Calculation = () => {
  return (
    <Box component="div" className="calc-container" id="calc">
      <Box component="div" className="calc-title">
        <Typography
          component="span"
          sx={{
            color: '#fff',
            fontSize: '48px',
            fontWeight: '600',
            lineHeight: '1.23',
          }}
        >
          Рассчитайте стоимость ремонта
        </Typography>
      </Box>
      <Box component="div" className="calc-subtitle">
        <Typography
          component="span"
          sx={{
            color: '#fff',
            fontSize: '24px',
            fontWeight: '300',
            lineHeight: '1.5',
          }}
        >
          Мы свяжемся с вами, сделаем замеры, расчеты работ и отправим вам
          документы на подпись в течение 2-3х дней
        </Typography>
      </Box>
      <Box component="div" className="calc-arrow-button">
        <Box component="div" className="calc-arrow">
          <svg
            role="presentation"
            x="0px"
            y="0px"
            width="45px"
            height="102px"
            viewBox="0 0 80 180"
          >
            <g>
              <path
                d="M54.1 109c-.8 0-1.6-.4-2-1.1-.8-1.1-.5-2.7.6-3.5 1.3-.9 6.8-4 11.6-6.6-15.9-1.3-29.2-8.3-38.5-20.2C8.9 56 8.5 24.1 13.2 3.4c.3-1.3 1.7-2.2 3-1.9 1.3.3 2.2 1.7 1.9 3-4.5 19.6-4.2 49.8 11.6 70 9 11.5 21.5 17.7 37.2 18.4l-1.8-2.3c-1.4-1.7-2.7-3.4-4.1-5.1-.7-.9-1.5-1.9-2.3-2.9-.9-1.1-.7-2.6.4-3.5 1.1-.9 2.6-.7 3.5.4 0 0 0 .1.1.1l6.4 7.9c.5.5.9 1.1 1.4 1.7 1.5 1.8 3.1 3.6 4.4 5.6 0 .1.1.1.1.2.1.3.2.5.3.8v.6c0 .2-.1.4-.2.6-.1.1-.1.3-.2.4-.1.2-.3.4-.5.6-.1.1-.3.2-.5.3-.1 0-.1.1-.2.1-1.2.6-16 8.6-18.1 10-.5.5-1 .6-1.5.6z"
                fill="#fff"
              />
            </g>
          </svg>
        </Box>
        <Link href="#calc" underline="none" color="black">
          <Button
            variant="contained"
            color="inherit"
            className="calc-button"
            sx={{
              color: '#000',
              backgroundColor: '#fff',
              textTransform: 'none',
              height: '60px',
              padding: '0 60px 0 60px',
              fontWeight: '700',
              fontSize: '16px',
              marginTop: '70px',
            }}
          >
            Отправить заявку
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Calculation;
