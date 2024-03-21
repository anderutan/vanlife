import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem('loggedin');
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to='login'
        state={{ from: location.pathname, message: 'You have to login first.' }}
        replace
      />
    );
  }
  return <Outlet />;
}
