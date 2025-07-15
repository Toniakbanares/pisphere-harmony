
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg glass-hover transition-all flex items-center space-x-2"
      aria-label="Toggle language"
    >
      <span className="text-lg">
        {language === 'pt' ? '🇧🇷' : '🇺🇸'}
      </span>
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageToggle;
