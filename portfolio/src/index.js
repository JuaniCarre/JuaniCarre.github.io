import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstPage from './Components/FirstPage';
import Header from './Components/Header';
import Projects from './Components/Projects/projects';
import AboutMe from './Components/AboutMe';
import Technologies from './Components/Technologies/Technologies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <FirstPage />
    <Technologies/>
    <AboutMe/>
    <Projects/>
  </React.StrictMode>
);

