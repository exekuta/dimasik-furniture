import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Reviews from './components/Reviews/Reviews';
import Reason from './components/Reason/Reason';
import Prices from './components/Prices/Prices';
import Stages from './components/Stages/Stages';
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
          <Portfolio />
          <Reviews />
          <Reason />
          <Prices />
          <Stages />
        </Box>
      </React.Fragment>
    </MuiTheme>
  );
}

export default App;
