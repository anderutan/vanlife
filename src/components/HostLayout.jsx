import { NavLink, Outlet } from 'react-router-dom';
export default function HostLayout() {
  const activeStyle = 'font-bold underline';
  const hoverStyle = 'hover:font-bold hover:underline';
  const classLink = ({ isActive }) => (isActive ? activeStyle : hoverStyle);

  return (
    <div className='h-full bg-orange-50'>
      <nav className='flex p-3 gap-3'>
        <NavLink end to='.' className={classLink}>
          Dashboard
        </NavLink>
        <NavLink to='income' className={classLink}>
          Income
        </NavLink>
        <NavLink to='vans' className={classLink}>
          Vans
        </NavLink>
        <NavLink to='reviews' className={classLink}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
