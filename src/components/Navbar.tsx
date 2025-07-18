import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Globe, Store, Users, BarChart3, ArrowRightLeft, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { t } = useLanguage();

  return (
    <div className={cn('glass p-4 rounded-xl flex justify-between items-center mb-6', className)}>
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pi-blue via-pi-purple to-pi-gold flex items-center justify-center">
          <span className="text-white font-bold">π</span>
        </div>
        <span className="font-medium text-lg">PiSphere</span>
      </Link>
      
      <div className="flex items-center space-x-1 sm:space-x-2">
        <NavItem to="/" icon={<Globe size={18} />} label={t('nav.home')} />
        <NavItem to="/market" icon={<Store size={18} />} label={t('nav.market')} />
        <NavItem to="/collaborate" icon={<Users size={18} />} label={t('nav.collaborate')} />
        <NavItem to="/pulse" icon={<BarChart3 size={18} />} label={t('nav.pulse')} />
        <NavItem to="/exchange" icon={<ArrowRightLeft size={18} />} label={t('nav.exchange')} />
        <NavItem to="/transfer" icon={<Send size={18} />} label={t('nav.transfer')} />
      </div>
      
      <div className="flex items-center space-x-2">
        <ThemeToggle />
        <LanguageToggle />
        <div className="glass px-3 py-1.5 rounded-full flex items-center space-x-2 bg-background/30">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-sm font-medium">1M π</span>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
  return (
    <Link 
      to={to} 
      className="group relative flex flex-col items-center justify-center px-3 py-2 rounded-lg glass-hover"
    >
      <div className="text-foreground group-hover:text-primary transition-colors duration-300">
        {icon}
      </div>
      <span className="text-xs mt-1 text-foreground group-hover:text-primary transition-colors duration-300">{label}</span>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pi-blue to-pi-purple group-hover:w-full transition-all duration-300"></div>
    </Link>
  );
};

export default Navbar;
