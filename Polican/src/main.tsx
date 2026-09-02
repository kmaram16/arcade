import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// No StrictMode: this game owns a single WebGL context + animation loop, and
// StrictMode's double-mount would create (and leak) a second renderer in dev.
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
