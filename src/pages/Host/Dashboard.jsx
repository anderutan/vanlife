import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className='h-screen'>
      <h1>Host Dashboard</h1>
      <p>test test</p>
      <Outlet />
    </div>
  );
}
