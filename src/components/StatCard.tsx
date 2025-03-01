
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  className
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'glass rounded-xl p-4 flex flex-col',
        className
      )}
    >
      <div className="flex justify-between items-start">
        <div className="p-2 rounded-lg bg-white/5">
          {icon}
        </div>
        
        {change && (
          <div className={cn(
            'text-xs font-medium px-2 py-1 rounded-full flex items-center',
            change.isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          )}>
            <span>
              {change.isPositive ? '+' : '-'}{Math.abs(change.value)}%
            </span>
          </div>
        )}
      </div>
      
      <div className="mt-4">
        <h3 className="text-white/70 text-sm">{title}</h3>
        <div className="text-2xl font-semibold mt-1">{value}</div>
      </div>
    </motion.div>
  );
};

export default StatCard;
