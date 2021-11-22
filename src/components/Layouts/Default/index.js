// MODULES
import React from 'react';
import { Route } from 'react-router-dom';

// COMPONENTS
import HeaderV2 from '../../HeaderV2';
import Content from '../../Content';
import Footer from '../../Footer';
//import Footer from '../../Footer/index';

function Default({ exact, path }) {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        return (
          <>
            <HeaderV2 />
            <main className="default-layout-area">
              <Content />
            </main>
            <Footer />
          </>
        );
      }}
    />
  );
}

export default Default;
