import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RouteViews from '../../RouteViews';
import Footer from '../Footer/index';

const App = () => {
  return (
    <div className="app-container">
      <div className="app-view">
        <BrowserRouter basename='/apcs-mock'>
          <RouteViews />
        </BrowserRouter>
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;