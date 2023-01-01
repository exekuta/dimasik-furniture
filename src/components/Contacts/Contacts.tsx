import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { FaWhatsapp, FaVk, FaTelegram } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import './Contacts.scss';

const Contacts = () => {
  return (
    <Box component="div" className="contacts-container" id="contacts">
      <Box component="div" className="contacts-title">
        <Typography
          component="span"
          sx={{
            color: '#000',
            fontSize: '48px',
            fontWeight: '600',
            lineHeight: '1.23',
          }}
        >
          +123 456 678 8344
          <br />
          mail@dimasik.com
        </Typography>
      </Box>
      <Box component="div" className="contacts-subtitle">
        <Typography
          component="span"
          sx={{
            color: '#000',
            fontSize: '18px',
            fontWeight: '300',
            lineHeight: '1.55',
          }}
        >
          Адрес нашего офиса: Сабира Ахтямова, 1 к1.
        </Typography>
      </Box>
      <Box component="div" className="contacts-socials-links">
        <IconContext.Provider value={{ size: '30px' }}>
          <Link href="#calc" underline="none" color="black">
            <FaWhatsapp />
          </Link>
          <Link href="#calc" underline="none" color="black">
            <FaVk />
          </Link>
          <Link href="#calc" underline="none" color="black">
            <FaTelegram />
          </Link>
        </IconContext.Provider>
      </Box>
      <YMaps>
        <Box component="div">
          <Map
            defaultState={{ center: [55.788, 49.216], zoom: 17 }}
            width="80vw"
            height="40vh"
          />
        </Box>
      </YMaps>
    </Box>
  );
};

export default Contacts;
