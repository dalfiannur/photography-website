import React from "react";
import { navigate } from "gatsby-link";
import { isLoggedIn } from '../../../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (!isLoggedIn() && window.location.pathname !== '/admin/login') {
    navigate('/admin/login');
  }

  return <Component {...rest} />
}

export default PrivateRoute;