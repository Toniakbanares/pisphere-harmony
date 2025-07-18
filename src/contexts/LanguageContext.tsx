
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
    exchange: string;
    transfer: string;
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
  exchange: {
    title: string;
    description: string;
    piToUsdt: string;
    piToBrl: string;
    amount: string;
    exchangeRate: string;
    convert: string;
    availableBalance: string;
    estimatedReceive: string;
  };
  transfer: {
    title: string;
    description: string;
    pixTransfer: string;
    enterAmount: string;
    pixKey: string;
    transferNow: string;
    confirmTransfer: string;
    processingTime: string;
  };
  common: {
    balance: string;
    amount: string;
    cancel: string;
    confirm: string;
    success: string;
    error: string;
    loading: string;
  };
}

const translations: Record<Language, Translations> = {
  pt: {
    welcome: {
      title: 'Bem-vindo ao PiSphere',
      subtitle: 'Seu hub para o ecossistema Pi',
      description: 'Conecte-se, colabore e cresça no futuro da economia digital com Pi Network. Descubra oportunidades, monitore métricas e participe da revolução financeira descentralizada.',
      getStarted: 'Começar Agora',
      learnMore: 'Saiba Mais'
    },
    nav: {
      home: 'Início',
      market: 'Mercado',
      collaborate: 'Colaborar',
      pulse: 'Pulse',
      exchange: 'Câmbio',
      transfer: 'Transferir'
    },
    stats: {
      piBalance: 'Saldo Pi',
      networkActivity: 'Atividade da Rede',
      securityScore: 'Pontuação de Segurança',
      kycStatus: 'Status KYC',
      verified: 'Verificado'
    },
    features: {
      title: 'Recursos Principais'
    },
    market: {
      title: 'Mercado Pi',
      description: 'Descubra e negocie no marketplace descentralizado do ecossistema Pi'
    },
    collaborate: {
      title: 'Colaborar',
      description: 'Conecte-se com pioneiros e construa projetos incríveis juntos'
    },
    pulse: {
      title: 'Network Pulse',
      description: 'Monitore métricas e insights da rede Pi em tempo real'
    },
    exchange: {
      title: 'Câmbio Pi',
      description: 'Troque seus Pi por USDT ou Reais (BRL) com as melhores taxas',
      piToUsdt: 'Pi → USDT',
      piToBrl: 'Pi → BRL',
      amount: 'Quantidade',
      exchangeRate: 'Taxa de Câmbio',
      convert: 'Converter',
      availableBalance: 'Saldo Disponível',
      estimatedReceive: 'Você Receberá'
    },
    transfer: {
      title: 'Transferência PIX',
      description: 'Transfira Pi convertidos em reais via PIX instantaneamente',
      pixTransfer: 'Transferir via PIX',
      enterAmount: 'Digite o valor em reais',
      pixKey: 'Chave PIX',
      transferNow: 'Transferir Agora',
      confirmTransfer: 'Confirmar Transferência',
      processingTime: 'Processamento: Instantâneo'
    },
    common: {
      balance: 'Saldo',
      amount: 'Valor',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      success: 'Sucesso',
      error: 'Erro',
      loading: 'Carregando'
    }
  },
  en: {
    welcome: {
      title: 'Welcome to PiSphere',
      subtitle: 'Your hub for the Pi ecosystem',
      description: 'Connect, collaborate, and grow in the future of digital economy with Pi Network. Discover opportunities, monitor metrics and participate in the decentralized financial revolution.',
      getStarted: 'Get Started',
      learnMore: 'Learn More'
    },
    nav: {
      home: 'Home',
      market: 'Market',
      collaborate: 'Collaborate',
      pulse: 'Pulse',
      exchange: 'Exchange',
      transfer: 'Transfer'
    },
    stats: {
      piBalance: 'Pi Balance',
      networkActivity: 'Network Activity',
      securityScore: 'Security Score',
      kycStatus: 'KYC Status',
      verified: 'Verified'
    },
    features: {
      title: 'Main Features'
    },
    market: {
      title: 'Pi Market',
      description: 'Discover and trade in the decentralized Pi ecosystem marketplace'
    },
    collaborate: {
      title: 'Collaborate',
      description: 'Connect with pioneers and build amazing projects together'
    },
    pulse: {
      title: 'Network Pulse',
      description: 'Monitor real-time Pi network metrics and insights'
    },
    exchange: {
      title: 'Pi Exchange',
      description: 'Exchange your Pi for USDT or Brazilian Real (BRL) with the best rates',
      piToUsdt: 'Pi → USDT',
      piToBrl: 'Pi → BRL',
      amount: 'Amount',
      exchangeRate: 'Exchange Rate',
      convert: 'Convert',
      availableBalance: 'Available Balance',
      estimatedReceive: 'You Will Receive'
    },
    transfer: {
      title: 'PIX Transfer',
      description: 'Transfer Pi converted to reais via PIX instantly',
      pixTransfer: 'Transfer via PIX',
      enterAmount: 'Enter amount in reais',
      pixKey: 'PIX Key',
      transferNow: 'Transfer Now',
      confirmTransfer: 'Confirm Transfer',
      processingTime: 'Processing: Instant'
    },
    common: {
      balance: 'Balance',
      amount: 'Amount',
      cancel: 'Cancel',
      confirm: 'Confirm',
      success: 'Success',
      error: 'Error',
      loading: 'Loading'
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
