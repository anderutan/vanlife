import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='flex justify-between items-center p-6 bg-orange-50'>
      <Link to='/'>
        <img src={logo} alt='' className='h-4' />
      </Link>
      <nav className='flex gap-3 '>
        <Link to='/about'>About</Link>
        <Link to='/vans'>Vans</Link>
      </nav>
    </header>
  );
}
