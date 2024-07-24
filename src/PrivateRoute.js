import React from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate instead of Redirect
import { getCurrentUser } from '../src/services/authServices';

function PrivateRoute({ children }) {
  const user = getCurrentUser();
  return user ? children : <Navigate to="/signin" replace />;
}

export default PrivateRoute;