
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Tag, Star } from 'lucide-react';

interface MarketItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  className?: string;
}

const MarketItem: React.FC<MarketItemProps> = ({
  id,
  name,
  price,
  image,
  rating,
  category,
  className
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        'glass rounded-xl overflow-hidden cursor-pointer group',
        className
      )}
    >
      <div className="w-full h-40 overflow-hidden relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute top-2 left-2 px-2 py-1 rounded-full glass text-xs font-medium flex items-center space-x-1">
          <Tag size={12} />
          <span>{category}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-white">{name}</h3>
          <div className="flex items-center space-x-1 text-yellow-400">
            <Star size={14} fill="currentColor" />
            <span className="text-xs">{rating}</span>
          </div>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <div className="text-lg font-semibold text-pi-blue">{price} π</div>
          <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-pi-blue to-pi-purple text-white text-sm hover:opacity-90 transition-opacity">
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MarketItem;
