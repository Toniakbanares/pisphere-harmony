
import React from 'react';
import { cn } from '@/lib/utils';
import { Users, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CollaborateItemProps {
  id: string;
  title: string;
  description: string;
  participants: number;
  lastActive: string;
  tags: string[];
  className?: string;
}

const CollaborateItem: React.FC<CollaborateItemProps> = ({
  id,
  title,
  description,
  participants,
  lastActive,
  tags,
  className
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'glass rounded-xl p-5 hover:bg-white/10 transition-colors cursor-pointer',
        className
      )}
    >
      <div className="flex justify-between">
        <h3 className="font-medium text-lg">{title}</h3>
        <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          <ArrowRight size={16} className="text-pi-blue" />
        </button>
      </div>
      
      <p className="text-white/70 text-sm mt-2 line-clamp-2">{description}</p>
      
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="px-2 py-1 rounded-full bg-pi-purple/20 text-pi-purple text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center mt-4 text-white/60 text-xs">
        <div className="flex items-center space-x-1">
          <Users size={14} />
          <span>{participants} participants</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <Clock size={14} />
          <span>Active {lastActive}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CollaborateItem;
