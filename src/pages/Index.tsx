
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Globe from '@/components/Globe';
import DashboardCard from '@/components/DashboardCard';
import StatCard from '@/components/StatCard';
import TransactionList from '@/components/TransactionList';
import { Store, Users, BarChart3, Wallet, Activity, Shield, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  // Mock data - ensuring type is explicitly "send", "receive", or "pending"
  const transactions = [
    { id: '1', type: 'receive' as const, amount: 12.5, address: '0x8a3e22ab9cc8c3bc4e89a76562f59ebd', time: '2 hours ago' },
    { id: '2', type: 'send' as const, amount: 5.25, address: '0xf14a7c67b14c90add9eeb42b0c', time: '5 hours ago' },
    { id: '3', type: 'receive' as const, amount: 0.75, address: '0x6d2e07b9ef9e405ab15c3e96f', time: 'yesterday' },
    { id: '4', type: 'pending' as const, amount: 2.0, address: '0x3a9b8d7c6f5e4d3c2b1a0', time: 'processing' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-4 sm:px-6 py-6 max-w-7xl mx-auto">
      <Navbar />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="glass rounded-xl overflow-hidden relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 w-full h-full z-0"
            >
              <Globe />
            </motion.div>
            
            <div className="relative z-10 p-6 md:p-10">
              <div className="max-w-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary inline-block mb-3">
                    {t('welcome.title')}
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold mb-3">
                    {t('welcome.subtitle')}
                  </h1>
                  
                  <p className="text-muted-foreground mb-6">
                    {t('welcome.description')}
                  </p>
                  
                  <div className="flex space-x-4">
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-pi-blue to-pi-purple text-white hover:shadow-lg hover:shadow-primary/20 transition-all">
                      {t('welcome.getStarted')}
                    </button>
                    <button className="px-4 py-2 rounded-lg glass hover:bg-background/20 transition-colors">
                      {t('welcome.learnMore')}
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <TransactionList transactions={transactions} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard
          title={t('stats.piBalance')}
          value="38.56 π"
          icon={<Wallet size={18} className="text-pi-blue" />}
          change={{ value: 2.4, isPositive: true }}
        />
        
        <StatCard
          title={t('stats.networkActivity')}
          value="1.2M+"
          icon={<Activity size={18} className="text-pi-purple" />}
          change={{ value: 5.7, isPositive: true }}
        />
        
        <StatCard
          title={t('stats.securityScore')}
          value="94%"
          icon={<Shield size={18} className="text-pi-gold" />}
        />
        
        <StatCard
          title={t('stats.kycStatus')}
          value={t('stats.verified')}
          icon={<User size={18} className="text-green-400" />}
        />
      </div>
      
      <h2 className="text-xl font-medium mb-4">{t('features.title')}</h2>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <DashboardCard
          title={t('market.title')}
          icon={<Store size={20} className="text-pi-blue" />}
          description={t('market.description')}
          to="/market"
          imageUrl="https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyeXB0byUyMG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          glowColor="blue"
        />
        
        <DashboardCard
          title={t('collaborate.title')}
          icon={<Users size={20} className="text-pi-purple" />}
          description={t('collaborate.description')}
          to="/collaborate"
          imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          glowColor="purple"
        />
        
        <DashboardCard
          title={t('pulse.title')}
          icon={<BarChart3 size={20} className="text-pi-gold" />}
          description={t('pulse.description')}
          to="/pulse"
          imageUrl="https://images.unsplash.com/photo-1642961096842-9117c8ffc290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyeXB0byUyMGRhdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          glowColor="gold"
        />
      </motion.div>
    </div>
  );
};

export default Index;
