import React, { FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const MuiTheme: FC<{ children: React.ReactNode }> = (props) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ff4400',
      },
      warning: {
        main: '#ed6c02',
      },
    },
    typography: {
      fontFamily: "'OpenSans', sans-serif",
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default MuiTheme;