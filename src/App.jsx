import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "@fontsource/inter";

// common app components imports
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

// page imports
import Index from './pages/Index/Index';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <BrowserRouter>
        <Nav />
        <div className="flex-grow">

          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          
        </div>

        <Footer />
      </BrowserRouter>

    </div>


  )
}

export default App;
