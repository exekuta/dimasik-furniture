import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import services01 from '../../assets/images/services01.jpg';
import services02 from '../../assets/images/services02.jpg';
import services03 from '../../assets/images/services03.jpg';
import './Services.scss';

const Services = () => {
  return (
    <Box component="div" className="services-container" id="services">
      <Box component="div" className="services-text-container">
        <Typography
          component="span"
          sx={{
            color: '#000',
            fontSize: '42px',
            fontWeight: '600',
            lineHeight: '1.23',
            marginBottom: '40px',
          }}
          className="services-text-title"
        >
          Наши услуги
        </Typography>
        <Typography
          component="span"
          sx={{
            color: '#000',
            fontSize: '22px',
            fontWeight: '300',
            lineHeight: '1.5',
            marginBottom: '105px',
          }}
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
      <Box component="div" className="services-content-container">
        <Box component="div" className="services-box-item">
          <img
            src={services01}
            alt="services01"
            className="services-pics-item"
          />
          <Typography
            component="span"
            sx={{
              color: '#000',
              fontSize: '26px',
              fontWeight: '600',
              lineHeight: '1.23',
              marginBottom: '12px',
            }}
          >
            Проектирование мебели
            <br />
            от Х ХХХ р
          </Typography>
          <Typography
            component="span"
            sx={{
              color: '#000',
              fontSize: '16px',
              fontWeight: '300',
              marginTop: '17px',
              marginBottom: '25px',
            }}
          >
            НУЖЕН ТЕКСТ!
          </Typography>
          <Button
            variant="contained"
            color="warning"
            sx={{
              color: '#fff',
              textTransform: 'none',
              height: '45px',
              padding: '0 30px 0 30px',
              fontWeight: '700',
              fontSize: '14px',
            }}
          >
            Рассчитать стоимость
          </Button>
        </Box>
        <Box component="div" className="services-box-item">
          <img
            src={services02}
            alt="services02"
            className="services-pics-item"
          />
           <Typography
            component="span"
            sx={{
              color: '#000',
              fontSize: '26px',
              fontWeight: '600',
              lineHeight: '1.23',
              marginBottom: '12px',
            }}
          >
            Сборка мебели
            <br />
            от Х ХХХ р
          </Typography>
          <Typography
            component="span"
            sx={{
              color: '#000',
              fontSize: '16px',
              fontWeight: '300',
              marginTop: '17px',
              marginBottom: '25px',
            }}
          >
            НУЖЕН ТЕКСТ!
          </Typography>
          <Button
              variant="contained"
              color="warning"
              sx={{
                color: '#fff',
                textTransform: 'none',
                height: '45px',
                padding: '0 30px 0 30px',
                fontWeight: '700',
                fontSize: '14px',
              }}
            >
              Рассчитать стоимость
            </Button>
        </Box>
        <Box component="div" className="services-box-item">
          <img
            src={services03}
            alt="services03"
            className="services-pics-item"
          />
           <Typography
            component="span"
            sx={{
              color: '#000',
              fontSize: '26px',
              fontWeight: '600',
              lineHeight: '1.23',
              marginBottom: '12px',
            }}
          >
            Исправление косяков при сборке
            <br />
            от ХХ ХХХ р
          </Typography>
          <Typography
            component="span"
            sx={{
              color: '#000',
              fontSize: '16px',
              fontWeight: '300',
              marginTop: '17px',
              marginBottom: '25px',
            }}
          >
            НУЖЕН ТЕКСТ!
          </Typography>
          <Button
              variant="contained"
              color="warning"
              sx={{
                color: '#fff',
                textTransform: 'none',
                height: '45px',
                padding: '0 30px 0 30px',
                fontWeight: '700',
                fontSize: '14px',
              }}
            >
              Рассчитать стоимость
            </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
