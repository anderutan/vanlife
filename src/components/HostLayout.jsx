import { NavLink, Outlet } from 'react-router-dom';
export default function HostLayout() {
  const activeStyle = 'font-bold underline';
  const hoverStyle = 'hover:font-bold hover:underline';
  return (
    <div className='h-full'>
      <nav className='flex p-3 gap-3'>
        <NavLink
          end
          to='/host'
          className={({ isActive }) => (isActive ? activeStyle : hoverStyle)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to='/host/income'
          className={({ isActive }) => (isActive ? activeStyle : hoverStyle)}
        >
          Income
        </NavLink>
        <NavLink
          to='/host/vans'
          className={({ isActive }) => (isActive ? activeStyle : hoverStyle)}
        >
          Vans
        </NavLink>
        <NavLink
          to='/host/reviews'
          className={({ isActive }) => (isActive ? activeStyle : hoverStyle)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
