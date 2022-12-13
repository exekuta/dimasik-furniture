import React, { FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const MuiTheme: FC<{ children: React.ReactNode }> = (props) => {
  const theme = createTheme({
    typography: {
      fontFamily: "'OpenSans', sans-serif",
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default MuiTheme;