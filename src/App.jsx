import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './pages/Index/Index';
import "@fontsource/inter";

import Nav from './components/Nav/Nav';


function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App;
