import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Services from './components/Services/Services';
import { Box, CssBaseline } from '@mui/material';
import './App.scss';
import MuiTheme from './components/MuiTheme/MuiTheme';

function App() {
  return (
    <MuiTheme>
      <React.Fragment>
        <CssBaseline />
        <Box component="div" className="App">
          <Header />
          <Main />
          <Services />
        </Box>
      </React.Fragment>
    </MuiTheme>
  );
}

export default App;
