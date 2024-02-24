import * as React from 'react';
import { lightTheme, darkTheme } from './themes';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/navbar/Navbar';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/priceestimate' element={<PriceEstimate />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
