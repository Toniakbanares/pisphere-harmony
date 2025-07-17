
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Iniciando PiSphere Harmony...');

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Elemento root não encontrado!");
  throw new Error("Elemento root não encontrado");
}

createRoot(rootElement).render(<App />);
