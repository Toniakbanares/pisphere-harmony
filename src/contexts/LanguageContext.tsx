
import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    'nav.home': 'Início',
    'nav.market': 'Mercado',
    'nav.collaborate': 'Colaborar',
    'nav.pulse': 'Pulse',
    'welcome.title': 'Bem-vindo ao PiSphere',
    'welcome.subtitle': 'Explore o Ecossistema Pi',
    'welcome.description': 'Conecte-se, transacione e colabore com pioneiros em todo o mundo através de uma plataforma descentralizada e contínua construída na Rede Pi.',
    'welcome.getStarted': 'Começar',
    'welcome.learnMore': 'Saiba Mais',
    'stats.piBalance': 'Saldo Pi',
    'stats.networkActivity': 'Atividade da Rede',
    'stats.securityScore': 'Pontuação de Segurança',
    'stats.kycStatus': 'Status KYC',
    'stats.verified': 'Verificado',
    'features.title': 'Recursos da Rede Pi',
    'market.title': 'Hub do Mercado Pi',
    'market.description': 'Navegue e compre bens e serviços usando moedas Pi em um mercado seguro.',
    'collaborate.title': 'Pi Colaborar',
    'collaborate.description': 'Trabalhe junto com outros Pioneiros em projetos e iniciativas dentro do ecossistema Pi.',
    'pulse.title': 'Pi Pulse',
    'pulse.description': 'Visualize dados e tendências em tempo real dentro do ecossistema da Rede Pi.',
    'transactions.recent': 'Transações Recentes',
    'transactions.receive': 'Recebido',
    'transactions.send': 'Enviado',
    'transactions.pending': 'Pendente',
  },
  en: {
    'nav.home': 'Home',
    'nav.market': 'Market',
    'nav.collaborate': 'Collaborate',
    'nav.pulse': 'Pulse',
    'welcome.title': 'Welcome to PiSphere',
    'welcome.subtitle': 'Explore the Pi Ecosystem',
    'welcome.description': 'Connect, transact, and collaborate with pioneers worldwide through a seamless, decentralized platform built on Pi Network.',
    'welcome.getStarted': 'Get Started',
    'welcome.learnMore': 'Learn More',
    'stats.piBalance': 'Pi Balance',
    'stats.networkActivity': 'Network Activity',
    'stats.securityScore': 'Security Score',
    'stats.kycStatus': 'KYC Status',
    'stats.verified': 'Verified',
    'features.title': 'Pi Network Features',
    'market.title': 'Pi Market Hub',
    'market.description': 'Browse and purchase goods and services using Pi coins in a secure marketplace.',
    'collaborate.title': 'Pi Collaborate',
    'collaborate.description': 'Work together with fellow Pioneers on projects and initiatives within the Pi ecosystem.',
    'pulse.title': 'Pi Pulse',
    'pulse.description': 'Visualize real-time data and trends within the Pi Network ecosystem.',
    'transactions.recent': 'Recent Transactions',
    'transactions.receive': 'Received',
    'transactions.send': 'Sent',
    'transactions.pending': 'Pending',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'pt';
  });

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
