import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Components/Home';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';

i18next.init({
  interpolation: { escapeValue: true },
  lng:'es',
  resources: {
    es: {
      global:global_es
    },
    en: {
      global: global_en
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Home/>
    </I18nextProvider>
  </React.StrictMode>
);

