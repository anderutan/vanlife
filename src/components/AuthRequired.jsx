import { Navigate, Outlet } from 'react-router-dom';

export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem('loggedin');

  if (!isLoggedIn) {
    return (
      <Navigate
        to='login'
        state={{ message: 'You have to login first.' }}
        replace
      />
    );
  }
  return <Outlet />;
}
