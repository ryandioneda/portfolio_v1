import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "@fontsource/inter";

// common app components imports
import Nav from './components/Nav/Nav';

// page imports
import Index from './pages/Index/Index';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path='/' element={<Index />} />
        </Routes>
      
      </BrowserRouter>

    </div>


  )
}

export default App;
