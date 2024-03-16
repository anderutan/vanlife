import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import logo from './assets/images/logo.png';

function App() {
  return (
    <BrowserRouter>
      <header className='flex justify-between items-center p-6 bg-orange-50 w-[548px]'>
        <Link to='/'>
          <img src={logo} alt='' className='h-4' />
        </Link>
        <nav className='flex gap-3 '>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
