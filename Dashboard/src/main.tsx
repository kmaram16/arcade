import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Offline mode: cache the arcade + games so they open and play with no wifi
// after the first online visit. Registered once from the launcher; its scope
// covers every game under the same path.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {
      /* offline mode just won't be available */
    });
  });
}
