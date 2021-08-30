import React from 'react';
import { Router } from '@reach/router';
import PrivateRoute from './__admin/components/PrivateRoute';

import LoginPage from './__admin/login';
import DashboardPage from './__admin/dashboard';

const AdminPage = () => {
  return (
    <Router className="h-full">
      <LoginPage path="/admin/login" />
      <PrivateRoute path="/admin" component={DashboardPage} />
    </Router>
  )
}

export default AdminPage;