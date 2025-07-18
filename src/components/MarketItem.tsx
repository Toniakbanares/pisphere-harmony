
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
  trending?: boolean;
  featured?: boolean;
  hot?: boolean;
  discount?: number;
  onClick?: () => void;
}

const MarketItem: React.FC<MarketItemProps> = ({
  id,
  name,
  price,
  image,
  rating,
  category,
  className,
  trending,
  featured,
  hot,
  discount,
  onClick
}) => {
  const finalPrice = discount ? price * (1 - discount / 100) : price;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.2 } 
      }}
      onClick={onClick}
      className={cn(
        'bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden cursor-pointer group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10',
        className
      )}
    >
      <div className="w-full h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Category Tag */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm text-xs font-medium flex items-center space-x-1 border border-border/50">
          <Tag size={12} />
          <span>{category}</span>
        </div>

        {/* Status Badges */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          {featured && (
            <div className="px-2 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold animate-pulse">
              ⭐ FEATURED
            </div>
          )}
          {trending && (
            <div className="px-2 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-bold">
              📈 TRENDING
            </div>
          )}
          {hot && (
            <div className="px-2 py-1 rounded-full bg-gradient-to-r from-red-400 to-pink-500 text-white text-xs font-bold animate-bounce">
              🔥 HOT
            </div>
          )}
          {discount && (
            <div className="px-2 py-1 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 text-white text-xs font-bold">
              -{discount}%
            </div>
          )}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{name}</h3>
          <div className="flex items-center space-x-1 text-yellow-400 shrink-0 ml-2">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {discount ? (
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {finalPrice.toFixed(2)} π
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  {price.toFixed(2)} π
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {price.toFixed(2)} π
              </span>
            )}
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-medium hover:shadow-lg transition-all"
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
          >
            Buy Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MarketItem;
