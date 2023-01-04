import React from 'react';
import { Box, Typography } from '@mui/material';
import stagesData from '../../assets/data/stages';
import './Stages.scss';

const Stages = () => {
  return (
    <Box component="div" className="stages-container">
      <Box component="div" className="stages-title">
        <Typography
          component="span"
          sx={{
            color: '#000',
            fontSize: '42px',
            fontWeight: '600',
            lineHeight: '1.23',
          }}
        >
          Из каких этапов состоит наша работа?
        </Typography>
      </Box>
      <Box component="div" className="stages-items-container">
        {stagesData.map((item) => (
        <Box component="div" className="stages-item" key={item.id}>
          <Box component="div" className="stages-item-orange">
            <Typography
              component="span"
              sx={{
                color: '#fff',
                fontSize: '16px',
                fontWeight: '600',
                lineHeight: '1.55',
              }}
            >
              {item.id}
            </Typography>
          </Box>
          <Box component="div" className="stages-item-text">
            <Typography
              component="span"
              sx={{
                color: '#000',
                fontSize: '20px',
                fontWeight: '600',
                lineHeight: '1.35',
                marginTop: '20px',
              }}
            >
              {item.title}
            </Typography>
            <Typography
              component="span"
              sx={{
                color: '#000',
                fontSize: '15px',
                fontWeight: '300',
                lineHeight: '1.55',
                textAlign: 'start',
                marginTop: '20px',
              }}
            >
              {item.subtitle}
            </Typography>
          </Box>
        </Box>
        ))}
        <Box component="div" className="stages-item-orange-line"></Box>
      </Box>
    </Box>
  )
};

export default Stages;