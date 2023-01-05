import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, TextField, Typography } from '@mui/material';
// import { useForm, Controller } from 'react-hook-form';
import './CalcForm.scss';

// interface IFormInput {
//   firstName: string;
//   phoneNumber: string;
//   eMail: string;
//   currentTarget: string | HTMLFormElement;
// }

const CalcForm = () => {
  // const {
  //   register,
  //   reset,
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<IFormInput>();

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
    // reset();
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
          // {...register('firstName', {
          //   // required: 'Это поле обязательно для заполнения',
          //   minLength: {
          //     value: 3,
          //     message: 'Минимальная длина 3 символов для имени',
          //   },
          //   maxLength: {
          //     value: 30,
          //     message: 'Максимальная длина 30 символов для имени',
          //   },
          //   pattern: /^[A-Za-z]+$/i,
          // })}
          label="Имя"
          variant="outlined"
          name="user_name"
          fullWidth
          sx={{ width: '25%' }}
          required
        />
        <TextField
          className="input-item"
          // {...register('phoneNumber', {
          //   // required: 'Это поле обязательно для заполнения',
          //   minLength: {
          //     value: 8,
          //     message: 'Минимальная длина 8 символов для имени',
          //   },
          //   maxLength: {
          //     value: 11,
          //     message: 'Максимальная длина 11 символов для имени',
          //   },
          // })}
          label="Телефон"
          variant="outlined"
          name="contact_number"
          fullWidth
          sx={{ width: '25%' }}
          required
        />
        <TextField
          className="input-item"
          // {...register('eMail', {
          //   // required: 'Это поле обязательно для заполнения',
          //   pattern: {
          //     value:
          //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          //     message: 'Неправильный e-mail',
          //   },
          // })}
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
      {/* <Box component="div" className="error_message">
        {errors?.firstName?.message && (
          <Box component="div" sx={{ width: '25%' }}>
            <Typography variant="inherit" component="p">
              ⚠ {errors?.firstName?.message}
            </Typography>
          </Box>
        )}
        {errors?.phoneNumber?.message && (
          <Box component="div" sx={{ width: '24%' }}>
            <Typography variant="inherit" component="p">
              ⚠ {errors?.phoneNumber?.message}
            </Typography>
          </Box>
        )}
        {errors?.eMail?.message && (
          <Box component="div" sx={{ width: '24%' }}>
            <Typography variant="inherit" component="p">
              ⚠ {errors?.eMail?.message}
            </Typography>
          </Box>
        )}
      </Box> */}
    </Box>
  );
};

export default CalcForm;
