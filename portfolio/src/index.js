import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstPage from './FirstPage';
import Header from './Header';
import Projects from './projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <FirstPage />
    <Projects/>
  </React.StrictMode>
);

