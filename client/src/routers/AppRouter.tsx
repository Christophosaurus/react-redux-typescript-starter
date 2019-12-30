import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { WelcomePage } from '../components/pages/WelcomePage';
import { NotFound } from '../components/pages/NotFound';

export const AppRouter: React.FC = () : JSX.Element => {
  return (
    <BrowserRouter>
      <div className="app-router">
        <Navbar />
        <div className="main-content">
          <Switch>
            <Route path="/" component={WelcomePage} exact />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};