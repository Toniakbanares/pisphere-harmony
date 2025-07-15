
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg glass-hover transition-all flex items-center space-x-1"
      aria-label="Toggle language"
    >
      <Globe size={16} />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageToggle;
