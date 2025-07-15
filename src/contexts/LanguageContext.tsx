
import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en';

interface Translations {
  welcome: {
    title: string;
    subtitle: string;
    description: string;
    getStarted: string;
    learnMore: string;
  };
  nav: {
    home: string;
    market: string;
    collaborate: string;
    pulse: string;
  };
  stats: {
    piBalance: string;
    networkActivity: string;
    securityScore: string;
    kycStatus: string;
    verified: string;
  };
  features: {
    title: string;
  };
  market: {
    title: string;
    description: string;
  };
  collaborate: {
    title: string;
    description: string;
  };
  pulse: {
    title: string;
    description: string;
  };
}

const translations: Record<Language, Translations> = {
  pt: {
    welcome: {
      title: 'Bem-vindo ao PiSphere',
      subtitle: 'Seu hub para o ecossistema Pi',
      description: 'Conecte-se, colabore e cresça no futuro da economia digital com Pi Network.',
      getStarted: 'Começar',
      learnMore: 'Saiba Mais'
    },
    nav: {
      home: 'Início',
      market: 'Mercado',
      collaborate: 'Colaborar',
      pulse: 'Pulse'
    },
    stats: {
      piBalance: 'Saldo Pi',
      networkActivity: 'Atividade da Rede',
      securityScore: 'Pontuação de Segurança',
      kycStatus: 'Status KYC',
      verified: 'Verificado'
    },
    features: {
      title: 'Recursos em Destaque'
    },
    market: {
      title: 'Mercado Pi',
      description: 'Descubra e negocie no marketplace descentralizado'
    },
    collaborate: {
      title: 'Colaborar',
      description: 'Conecte-se com pioneiros e construa juntos'
    },
    pulse: {
      title: 'Network Pulse',
      description: 'Monitore métricas e insights da rede em tempo real'
    }
  },
  en: {
    welcome: {
      title: 'Welcome to PiSphere',
      subtitle: 'Your hub for the Pi ecosystem',
      description: 'Connect, collaborate, and grow in the future of digital economy with Pi Network.',
      getStarted: 'Get Started',
      learnMore: 'Learn More'
    },
    nav: {
      home: 'Home',
      market: 'Market',
      collaborate: 'Collaborate',
      pulse: 'Pulse'
    },
    stats: {
      piBalance: 'Pi Balance',
      networkActivity: 'Network Activity',
      securityScore: 'Security Score',
      kycStatus: 'KYC Status',
      verified: 'Verified'
    },
    features: {
      title: 'Featured'
    },
    market: {
      title: 'Pi Market',
      description: 'Discover and trade in the decentralized marketplace'
    },
    collaborate: {
      title: 'Collaborate',
      description: 'Connect with pioneers and build together'
    },
    pulse: {
      title: 'Network Pulse',
      description: 'Monitor real-time network metrics and insights'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const getNestedValue = (obj: any, path: string): string => {
    return path.split('.').reduce((o, p) => o?.[p], obj) || path;
  };

  const t = (key: string): string => {
    return getNestedValue(translations[language], key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
