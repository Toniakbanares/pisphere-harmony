
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Market from "./pages/Market";
import Collaborate from "./pages/Collaborate";
import Pulse from "./pages/Pulse";
import Exchange from "./pages/Exchange";
import Transfer from "./pages/Transfer";
import NotFound from "./pages/NotFound";

console.log('📦 Carregando componentes do App...');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  console.log('🎨 Renderizando App component...');
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <HashRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/market" element={<Market />} />
                <Route path="/collaborate" element={<Collaborate />} />
                <Route path="/pulse" element={<Pulse />} />
                <Route path="/exchange" element={<Exchange />} />
                <Route path="/transfer" element={<Transfer />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </HashRouter>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
