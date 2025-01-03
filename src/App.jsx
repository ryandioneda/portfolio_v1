"use client";

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "@fontsource/inter";
import Lenis from 'lenis';

// common app components imports
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

// page imports
import Index from './pages/Index/Index';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Work from './pages/Work/Work';
import { useEffect } from 'react';
import 'lenis/dist/lenis.css';

function App() {
  
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className='flex flex-col min-h-screen'>
      <BrowserRouter>
        <Nav />
        <div className="flex-grow">
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            {/* <Route path='/work' element={<Work />} /> */}
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>

    </div>


  )
}

export default App;
