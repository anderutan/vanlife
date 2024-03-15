import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import logo from './images/logo.png';

function App() {
  return (
    <BrowserRouter>
      <nav className='flex justify-between items-center p-6 bg-orange-50'>
        <Link to='/'>
          <img src={logo} alt='' className='h-4' />
        </Link>
        <div className='flex gap-3 '>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/vans' element={<Vans/>}/> */}
      </Routes>
      <footer className='w-full h-1/12 absolute bottom-0 text-center text-xs bg-neutral-800 text-neutral-100 py-3'>
        Ⓒ 2024 #VANLIFE
      </footer>
    </BrowserRouter>
  );
}

export default App;
