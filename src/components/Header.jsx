import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const activeStyle = 'font-bold underline';
  return (
    <header className='flex justify-between items-center p-6 bg-orange-50'>
      <NavLink to='/'>
        <img src={logo} alt='' className='h-4' />
      </NavLink>
      <nav className='flex gap-3 '>
        <NavLink
          to='/host'
          className={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to='/vans'
          className={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
