import React from 'react';
import { Box, Typography } from '@mui/material';
import reasonData from '../../assets/data/reason';
import './Reason.scss';

const Reason = () => {
  return (
    <Box component="div" className="reason-container">
      <Box component="div" className="reason-title">
        <Typography
          component="span"
          sx={{
            color: '#000',
            fontSize: '42px',
            fontWeight: '600',
            lineHeight: '1.23',
          }}
        >
          Почему мы вам понравимся?
        </Typography>
      </Box>
      <Box component="div" className="reason-items-container">
        {reasonData.map((item) => (
          <Box component="div" className="reason-item">
            <Box component="div" className="reason-item-orange">
              <Typography
                component="span"
                sx={{
                  color: '#fff',
                  fontSize: '20px',
                  fontWeight: '600',
                  lineHeight: '1.55',
                }}
              >
                {item.id}
              </Typography>
            </Box>
            <Box component="div" className="reason-item-text">
              <Typography
                component="span"
                sx={{
                  color: '#000',
                  fontSize: '18px',
                  fontWeight: '600',
                  lineHeight: '1.35',
                  paddingBottom: '13px',
                }}
              >
                {item.title}
              </Typography>
              <Typography
                component="span"
                sx={{
                  color: '#000',
                  fontSize: '16px',
                  fontWeight: '300',
                  lineHeight: '1.55',
                  textAlign: 'start',
                }}
              >
                {item.subtitle}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Reason;
