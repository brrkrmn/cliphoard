import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ClipProvider from './context/Clip/ClipProvider';
import './globals.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ClipProvider>
      <App />
    </ClipProvider>
  </React.StrictMode>
);