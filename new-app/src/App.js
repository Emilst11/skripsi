import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Routings from './routes/Routings';

const App = () => {
  return(
    <BrowserRouter>
      <Routings/>
    </BrowserRouter>
  )
}



export default App;
