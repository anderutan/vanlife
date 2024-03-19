import { Navigate, Outlet } from 'react-router-dom';

export default function AuthRequired() {
  const authenticated = false;
  if (!authenticated) {
    return (
      <Navigate to='login' state={{ message: 'You have to login first.' }} />
    );
  }
  return <Outlet />;
}
