import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <nav className='flex justify-between px-6 py-9 bg-orange-50'>
        <Link to='/'>Home</Link>
        <div>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} /> */}
        {/* <Route path='/vans' element={<Vans/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
