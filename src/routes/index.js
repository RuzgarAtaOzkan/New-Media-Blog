// MODULES
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

// PAGES
import HomePage from '../pages/Home';

// COMPONENTS
import DefaultLayout from '../components/Layouts/Default/index';

function AllRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default AllRoutes;
