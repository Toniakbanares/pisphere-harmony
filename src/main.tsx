
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Starting PiSphere Harmony application...');
console.log('Current location:', window.location.href);

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found!");
  throw new Error("Root element not found");
}

console.log('Root element found, initializing React app...');

try {
  createRoot(rootElement).render(<App />);
  console.log('React app rendered successfully!');
} catch (error) {
  console.error('Error rendering React app:', error);
}
