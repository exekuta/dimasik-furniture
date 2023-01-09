import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, TextField, Typography } from '@mui/material';
import './CalcForm.scss';

const CalcForm = () => {

  const form = useRef<HTMLFormElement>();

  const sendEmail = (e: { preventDefault: () => void; currentTarget: string | HTMLFormElement; }) => {
    e.preventDefault();
    console.log(e);
    emailjs
      .sendForm(
        'service_n9kqgow',
        'template_x7cbix7',
        e.currentTarget,
        'sUf6KBe1LfdJD21A_'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Сообщение отправлено!');
        },
        (error) => {
          console.log(error.text);
          alert('Произошла ошибка!');
        }
      );
  };

  return (
    <Box component="div" className="prices-container" id="calc">
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
          Расчет стоимости работ бесплатно
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
      <Box
        component="form"
        className="prices-inputs"
        ref={form}
        onSubmit={sendEmail}
      >
        <TextField
          className="input-item"
          label="Имя"
          variant="outlined"
          name="user_name"
          fullWidth
          sx={{ width: '25%' }}
          required
        />
        <TextField
          className="input-item"
          label="Телефон"
          variant="outlined"
          name="contact_number"
          fullWidth
          sx={{ width: '25%' }}
          required
        />
        <TextField
          className="input-item"
          label="e-mail"
          variant="outlined"
          name="user_mail"
          fullWidth
          sx={{ width: '25%' }}
          required
        />
        <Button
          type="submit"
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

export default CalcForm;
