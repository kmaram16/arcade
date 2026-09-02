import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// No StrictMode: the app owns a single AudioContext; a double-mount in dev would
// spin up (and leak) a second audio graph.
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
