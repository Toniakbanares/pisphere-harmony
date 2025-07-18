
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import MarketItem from '@/components/MarketItem';
import Loader from '@/components/Loader';
import { Search, Filter, ShoppingBag, Zap, TrendingUp, Flame } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const Market = () => {
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  const { t } = useLanguage();
  
  // Enhanced market items with more variety and better data
  const marketItems = [
    {
      id: '1',
      name: 'Premium Pi T-Shirt',
      price: 12.5,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      rating: 4.8,
      category: 'Clothing',
      trending: true,
      featured: true
    },
    {
      id: '2',
      name: 'Pi Network Mug',
      price: 8.75,
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG11Z3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      rating: 4.5,
      category: 'Merchandise',
      discount: 15
    },
    {
      id: '3',
      name: 'Digital Art Collection',
      price: 24.0,
      image: 'https://images.unsplash.com/photo-1659535880591-78ed91b35158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      rating: 4.9,
      category: 'Digital',
      trending: true
    },
    {
      id: '4',
      name: 'Web Development Service',
      price: 50.0,
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      rating: 4.7,
      category: 'Services',
      featured: true
    },
    {
      id: '5',
      name: 'Pi Network Stickers',
      price: 3.5,
      image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RpY2tlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      rating: 4.3,
      category: 'Merchandise',
      hot: true
    },
    {
      id: '6',
      name: 'Blockchain Course',
      price: 35.0,
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      rating: 4.6,
      category: 'Education'
    },
    {
      id: '7',
      name: 'Pi Mining Hardware',
      price: 125.0,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      rating: 4.9,
      category: 'Electronics',
      featured: true,
      trending: true
    },
    {
      id: '8',
      name: 'Pi Wallet Security Kit',
      price: 45.0,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      rating: 4.8,
      category: 'Security',
      hot: true
    }
  ];
  
  const categories = [
    'All', 'Clothing', 'Merchandise', 'Digital', 'Services', 'Education', 'Electronics', 'Security'
  ];

  // Filter items based on search and category
  const filteredItems = marketItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleItemClick = (item: any) => {
    toast({
      title: "💎 Item Added to Cart!",
      description: `${item.name} (${item.price} π) was added to your cart.`,
    });
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground px-4 sm:px-6 py-6 max-w-7xl mx-auto">
      <Navbar />
      
      {/* Hero Section with Enhanced Visuals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl glass-effect p-8 mb-8"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-50" />
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold flex items-center mb-2">
                <ShoppingBag className="mr-3 text-primary" size={36} />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Pi Market Hub
                </span>
              </h1>
              <p className="text-muted-foreground text-lg">Discover amazing products and services in the Pi ecosystem</p>
              <div className="flex items-center space-x-4 mt-4">
                <div className="flex items-center space-x-1 text-green-400">
                  <TrendingUp size={16} />
                  <span className="text-sm">1.2M+ Active Users</span>
                </div>
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Flame size={16} />
                  <span className="text-sm">50K+ Products</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-0 w-full sm:w-auto flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <div className="relative flex-1 sm:flex-none">
                <input
                  type="text"
                  placeholder="Search marketplace..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-72 px-4 py-3 pl-12 rounded-xl bg-card/50 backdrop-blur-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              </div>
              
              <button className="bg-card/50 p-3 rounded-xl hover:bg-card/70 transition-all border border-border group">
                <Filter size={20} className="group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Enhanced Category Filter */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 overflow-x-auto scrollbar-hide"
      >
        <div className="flex space-x-3 min-w-max pb-2">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg' 
                  : 'bg-card/50 hover:bg-card/70 text-foreground border border-border hover:border-primary/50'
              }`}
            >
              {category}
              {category !== 'All' && (
                <span className="ml-2 text-xs opacity-70">
                  ({marketItems.filter(item => item.category === category).length})
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
      
      {loading ? (
        <div className="flex justify-center py-12">
          <Loader size="lg" />
        </div>
      ) : (
        <>
          {/* Results Summary */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 flex items-center justify-between"
          >
            <p className="text-muted-foreground">
              {filteredItems.length} {filteredItems.length === 1 ? 'product' : 'products'} found
              {searchTerm && ` for "${searchTerm}"`}
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Zap size={16} className="text-yellow-400" />
              <span>Lightning fast delivery with Pi payments</span>
            </div>
          </motion.div>

          {/* Enhanced Product Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <MarketItem
                  {...item}
                  onClick={() => handleItemClick(item)}
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                <Search size={32} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </motion.div>
          )}
        </>
      )}
      
      {/* Enhanced Featured Merchant Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border/50 p-8"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ⭐ Featured Merchant of the Month
            </h2>
            <div className="flex items-center space-x-1 text-yellow-400">
              <Flame size={20} />
              <span className="text-sm font-medium">HOT</span>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="Merchant"
                className="w-24 h-24 rounded-2xl object-cover ring-4 ring-primary/20"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="font-bold text-xl">Sarah's Digital Designs</h3>
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                  Verified Merchant
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-2xl">
                Creating stunning custom digital art and designs for the Pi community. Specialized in NFT collections, 
                digital merchandise, and blockchain-powered creative solutions. Over 5000+ satisfied customers worldwide.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star size={18} fill="currentColor" />
                    <span className="font-bold">4.9</span>
                  </div>
                  <span className="text-muted-foreground">(1,284 reviews)</span>
                </div>
                
                <div className="flex items-center space-x-2 text-green-400">
                  <TrendingUp size={16} />
                  <span className="text-sm font-medium">98% positive feedback</span>
                </div>
                
                <div className="flex items-center space-x-2 text-blue-400">
                  <Zap size={16} />
                  <span className="text-sm font-medium">Lightning fast delivery</span>
                </div>
              </div>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Visit Store →
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Star = ({ size, fill = "none", className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export default Market;
