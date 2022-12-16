import { Navigate, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: RouteComponent, ...rest}) => {
  const user = null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <RouteComponent {...rest} />;
};
