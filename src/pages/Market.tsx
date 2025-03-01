
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import MarketItem from '@/components/MarketItem';
import Loader from '@/components/Loader';
import { Search, Filter, ShoppingBag } from 'lucide-react';

const Market = () => {
  const [loading, setLoading] = useState(false);
  
  // Mock data for market items
  const marketItems = [
    {
      id: '1',
      name: 'Premium Pi T-Shirt',
      price: 12.5,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      rating: 4.8,
      category: 'Clothing'
    },
    {
      id: '2',
      name: 'Pi Network Mug',
      price: 8.75,
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG11Z3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      rating: 4.5,
      category: 'Merchandise'
    },
    {
      id: '3',
      name: 'Digital Art Collection',
      price: 24.0,
      image: 'https://images.unsplash.com/photo-1659535880591-78ed91b35158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      rating: 4.9,
      category: 'Digital'
    },
    {
      id: '4',
      name: 'Web Development Service',
      price: 50.0,
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      rating: 4.7,
      category: 'Services'
    },
    {
      id: '5',
      name: 'Pi Network Stickers',
      price: 3.5,
      image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RpY2tlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      rating: 4.3,
      category: 'Merchandise'
    },
    {
      id: '6',
      name: 'Blockchain Course',
      price: 35.0,
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      rating: 4.6,
      category: 'Education'
    },
  ];
  
  const categories = [
    'All', 'Clothing', 'Merchandise', 'Digital', 'Services', 'Education'
  ];
  
  return (
    <div className="min-h-screen bg-pi-dark text-white px-4 sm:px-6 py-6 max-w-7xl mx-auto">
      <Navbar />
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold flex items-center">
            <ShoppingBag className="mr-2" /> Pi Market Hub
          </h1>
          <p className="text-white/70 mt-1">Discover products and services in the Pi ecosystem</p>
        </motion.div>
        
        <div className="mt-4 sm:mt-0 w-full sm:w-auto flex space-x-2">
          <div className="relative flex-1 sm:flex-none">
            <input
              type="text"
              placeholder="Search marketplace..."
              className="w-full sm:w-64 px-4 py-2 pl-10 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-pi-blue/50"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
          </div>
          
          <button className="glass p-2 rounded-lg hover:bg-white/10 transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>
      
      <div className="mb-6 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-2 min-w-max">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full ${
                index === 0 
                  ? 'bg-gradient-to-r from-pi-blue to-pi-purple text-white' 
                  : 'glass hover:bg-white/10 transition-colors'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center py-12">
          <Loader size="lg" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketItems.map((item) => (
            <MarketItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              rating={item.rating}
              category={item.category}
            />
          ))}
        </div>
      )}
      
      <div className="mt-8 glass rounded-xl p-6">
        <h2 className="text-xl font-medium mb-4">Featured Merchant</h2>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="Merchant"
            className="w-20 h-20 rounded-full object-cover"
          />
          
          <div>
            <h3 className="font-medium text-lg">Sarah's Digital Designs</h3>
            <p className="text-white/70 text-sm mt-1">
              Creating custom digital art and designs for the Pi community. Specialized in NFT collections and digital merchandise.
            </p>
            
            <div className="flex items-center space-x-3 mt-3">
              <div className="flex items-center space-x-1 text-yellow-400">
                <Star size={16} fill="currentColor" />
                <span>4.9 (128 reviews)</span>
              </div>
              
              <span className="text-white/40">|</span>
              
              <span className="text-green-400">Verified Merchant</span>
            </div>
          </div>
          
          <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors self-start sm:self-center mt-2 sm:mt-0 text-sm">
            View Store
          </button>
        </div>
      </div>
    </div>
  );
};

const Star = ({ size, fill = "none", className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export default Market;
