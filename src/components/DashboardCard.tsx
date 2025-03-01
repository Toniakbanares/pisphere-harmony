
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface DashboardCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  to: string;
  imageUrl?: string;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'gold';
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  icon,
  description,
  to,
  imageUrl,
  className,
  glowColor = 'blue'
}) => {
  const glowClasses = {
    blue: 'glow',
    purple: 'glow-purple',
    gold: 'glow-gold'
  };
  
  return (
    <Link to={to}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        className={cn(
          'glass rounded-xl overflow-hidden h-full transition-all duration-300 hover:shadow-lg',
          glowClasses[glowColor],
          className
        )}
      >
        {imageUrl && (
          <div className="w-full h-28 overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="p-5">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 rounded-lg bg-white/5 text-white">
              {icon}
            </div>
            <h3 className="font-medium text-white text-lg">{title}</h3>
          </div>
          
          <p className="text-white/70 text-sm">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default DashboardCard;
