import 'microtip/microtip.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ClipProvider from './context/Clip/ClipProvider';
import CreateClipProvider from './context/CreateClip/CreateClipProvider';
import './globals.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ClipProvider>
      <CreateClipProvider>
        <App />
      </CreateClipProvider>
    </ClipProvider>
  </React.StrictMode>
);