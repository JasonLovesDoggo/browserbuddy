import React from 'react';
import ReactDOM from 'react-dom/client';
import Settings from './index';
import '../styles/global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Settings />
  </React.StrictMode>
);