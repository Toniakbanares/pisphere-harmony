
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('🚀 Iniciando PiSphere Harmony...');

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("❌ Elemento root não encontrado!");
  document.body.innerHTML = '<div style="color: white; background: #1a1a1a; padding: 20px; font-family: Arial;">Erro: Elemento root não encontrado</div>';
} else {
  console.log('✅ Elemento root encontrado, iniciando aplicação...');
  
  try {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    console.log('✅ Aplicação iniciada com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao iniciar aplicação:', error);
    rootElement.innerHTML = '<div style="color: white; background: #1a1a1a; padding: 20px; font-family: Arial;">Erro ao carregar a aplicação: ' + (error as Error).message + '</div>';
  }
}
