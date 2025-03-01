
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Globe, Store, Users, BarChart3 } from 'lucide-react';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={cn('glass p-4 rounded-xl flex justify-between items-center mb-6', className)}>
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pi-blue via-pi-purple to-pi-gold flex items-center justify-center">
          <span className="text-white font-bold">π</span>
        </div>
        <span className="font-medium text-lg">PiSphere</span>
      </Link>
      
      <div className="flex items-center space-x-1 sm:space-x-4">
        <NavItem to="/" icon={<Globe size={18} />} label="Home" />
        <NavItem to="/market" icon={<Store size={18} />} label="Market" />
        <NavItem to="/collaborate" icon={<Users size={18} />} label="Collaborate" />
        <NavItem to="/pulse" icon={<BarChart3 size={18} />} label="Pulse" />
      </div>
      
      <div className="glass px-3 py-1.5 rounded-full flex items-center space-x-2 bg-white/10">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
        <span className="text-sm font-medium">38.56 π</span>
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
      <div className="text-white group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <span className="text-xs mt-1 text-white group-hover:text-white transition-colors duration-300">{label}</span>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pi-blue to-pi-purple group-hover:w-full transition-all duration-300"></div>
    </Link>
  );
};

export default Navbar;
