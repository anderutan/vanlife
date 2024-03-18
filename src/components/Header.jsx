import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const activeStyle = 'font-bold underline';
  const hoverStyle = 'hover:font-bold hover:underline';
  const classLink = ({ isActive }) => (isActive ? activeStyle : hoverStyle);

  return (
    <header className='flex justify-between items-center p-6 bg-orange-50'>
      <NavLink to='/'>
        <img src={logo} alt='' className='h-4' />
      </NavLink>
      <nav className='flex gap-3 '>
        <NavLink to='/host' className={classLink}>
          Host
        </NavLink>
        <NavLink to='/about' className={classLink}>
          About
        </NavLink>
        <NavLink to='/vans' className={classLink}>
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
