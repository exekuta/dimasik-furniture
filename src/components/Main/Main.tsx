import React from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import './Main.scss';

const Main = () => {
  return (
    <Box component="div" className="main-container">
      <Box component="div" className="main-text-container">
        <Box component="div" className="main-text-bg-cover" />
        <Box component="div" className="main-text-flex">
          <Box component="div" className="main-text-wrapper">
            <Typography
              sx={{ fontSize: '52px', fontWeight: '600', letterSpacing: '1px' }}
              className="main-text-title"
            >
              Проектирование и сборка корпусной мебели с гарантией
            </Typography>
            <Typography
              sx={{ fontSize: '22px', fontWeight: '300', lineHeight: '1.55' }}
              component="span"
              className="main-text-subtitle"
            >
              Мы занимаемся проектированием и сборкой корпусной кухонной мебели
              и гарнитуров, гардеробных и шкафов-купе
            </Typography>
            <Box component="div" className="main-text-buttons">
              <Link href="#calc" underline="none" color="white">
                <Button
                  variant="contained"
                  color="warning"
                  sx={{
                    color: '#fff',
                    textTransform: 'none',
                    height: '60px',
                    padding: '0 60px 0 60px',
                    fontWeight: '700',
                  }}
                >
                  Рассчитать стоимость
                </Button>
              </Link>
              <Link href="#services" underline="none" color="white">
                <Button
                  variant="outlined"
                  sx={{
                    color: '#fff',
                    borderColor: '#fff',
                    textTransform: 'none',
                    height: '60px',
                    padding: '0 60px 0 60px',
                    fontWeight: '700',
                  }}
                >
                  Услуги
                </Button>
              </Link>
            </Box>
            <Box component="div" className="main-arrow">
              <Link href="#services">
                <svg
                  role="presentation"
                  x="0px"
                  y="0px"
                  width="38.417px"
                  height="18.592px"
                  viewBox="0 0 38.417 18.592"
                >
                  <g>
                    <path
                      d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"
                      fill="#859ab8"
                    />
                  </g>
                </svg>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
