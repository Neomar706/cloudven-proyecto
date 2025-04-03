// components/PrivateRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ isAuthenticated }) => {  
  return isAuthenticated ? <Outlet /> : <Navigate to="/admin-login" replace />;
};