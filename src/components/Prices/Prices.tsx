import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";
import './Prices.scss';

interface IFormInput {
  firstName: string;
  phoneNumber: string;
  eMail: string;
}

const Prices = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      phoneNumber: '',
      eMail: '',
    }
  });

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
      <Box component="form" className="prices-inputs">
        <TextField
          className="input-item"
          label="Имя" 
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          className="input-item"
          label="Телефон" 
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          className="input-item"
          label="e-mail" 
          variant="outlined"
          fullWidth
          required
        />
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
      </Box>
    </Box>
  );
};

export default Prices;
