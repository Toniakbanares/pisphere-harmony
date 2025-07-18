
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Globe from '@/components/Globe';
import DashboardCard from '@/components/DashboardCard';
import StatCard from '@/components/StatCard';
import TransactionList from '@/components/TransactionList';
import { Store, Users, BarChart3, Wallet, Activity, Shield, User, Zap, TrendingUp, Globe as GlobeIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  // Mock data com mais transações
  const transactions = [
    { id: '1', type: 'receive' as const, amount: 25.8, address: '0x8a3e22ab9cc8c3bc4e89a76562f59ebd', time: '1 hora atrás' },
    { id: '2', type: 'send' as const, amount: 8.45, address: '0xf14a7c67b14c90add9eeb42b0c', time: '3 horas atrás' },
    { id: '3', type: 'receive' as const, amount: 12.3, address: '0x6d2e07b9ef9e405ab15c3e96f', time: 'ontem' },
    { id: '4', type: 'pending' as const, amount: 5.67, address: '0x3a9b8d7c6f5e4d3c2b1a0', time: 'processando' },
    { id: '5', type: 'receive' as const, amount: 18.92, address: '0x9f8e7d6c5b4a39281706f', time: '2 dias atrás' },
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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-4 sm:px-6 py-6 max-w-7xl mx-auto">
      <Navbar />
      
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="glass rounded-xl overflow-hidden relative min-h-[400px]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 w-full h-full z-0"
            >
              <Globe />
            </motion.div>
            
            <div className="relative z-10 p-6 md:p-10 h-full flex flex-col justify-center">
              <div className="max-w-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary border border-primary/20 mb-4">
                    <Zap size={12} />
                    {t('welcome.title')}
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                    {t('welcome.subtitle')}
                  </h1>
                  
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {t('welcome.description')}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-pi-blue to-pi-purple text-white font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
                    >
                      {t('welcome.getStarted')}
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-lg glass hover:bg-background/20 transition-colors font-medium"
                    >
                      {t('welcome.learnMore')}
                    </motion.button>
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
      
      {/* Stats Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <StatCard
            title={t('stats.piBalance')}
            value="1,000,000.00 π"
            icon={<Wallet size={18} className="text-pi-blue" />}
            change={{ value: 15.7, isPositive: true }}
          />
        </motion.div>
        
        <motion.div variants={item}>
          <StatCard
            title={t('stats.networkActivity')}
            value="2.7M+"
            icon={<Activity size={18} className="text-pi-purple" />}
            change={{ value: 12.5, isPositive: true }}
          />
        </motion.div>
        
        <motion.div variants={item}>
          <StatCard
            title={t('stats.securityScore')}
            value="97%"
            icon={<Shield size={18} className="text-pi-gold" />}
            change={{ value: 3.1, isPositive: true }}
          />
        </motion.div>
        
        <motion.div variants={item}>
          <StatCard
            title={t('stats.kycStatus')}
            value={t('stats.verified')}
            icon={<User size={18} className="text-green-400" />}
          />
        </motion.div>
      </motion.div>
      
      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <motion.div 
          className="glass rounded-xl p-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Taxa de Crescimento</h3>
            <TrendingUp size={20} className="text-green-400" />
          </div>
          <div className="text-2xl font-bold text-green-400">+15.7%</div>
          <p className="text-sm text-muted-foreground">Este mês</p>
        </motion.div>

        <motion.div 
          className="glass rounded-xl p-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Pioneers Ativos</h3>
            <GlobeIcon size={20} className="text-pi-blue" />
          </div>
          <div className="text-2xl font-bold text-pi-blue">47M+</div>
          <p className="text-sm text-muted-foreground">Globalmente</p>
        </motion.div>

        <motion.div 
          className="glass rounded-xl p-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Transações Hoje</h3>
            <Zap size={20} className="text-pi-purple" />
          </div>
          <div className="text-2xl font-bold text-pi-purple">1.2K</div>
          <p className="text-sm text-muted-foreground">+23% vs ontem</p>
        </motion.div>
      </div>
      
      {/* Features Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{t('features.title')}</h2>
        <p className="text-muted-foreground">Explore todos os recursos do ecossistema Pi</p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <DashboardCard
            title={t('market.title')}
            icon={<Store size={20} className="text-pi-blue" />}
            description={t('market.description')}
            to="/market"
            imageUrl="https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyeXB0byUyMG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            glowColor="blue"
          />
        </motion.div>
        
        <motion.div variants={item}>
          <DashboardCard
            title={t('collaborate.title')}
            icon={<Users size={20} className="text-pi-purple" />}
            description={t('collaborate.description')}
            to="/collaborate"
            imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbGxhYm9yYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            glowColor="purple"
          />
        </motion.div>
        
        <motion.div variants={item}>
          <DashboardCard
            title={t('pulse.title')}
            icon={<BarChart3 size={20} className="text-pi-gold" />}
            description={t('pulse.description')}
            to="/pulse"
            imageUrl="https://images.unsplash.com/photo-1642961096842-9117c8ffc290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyeXB0byUyMGRhdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            glowColor="gold"
          />
        </motion.div>
      </motion.div>
      
      {/* Footer */}
      <motion.footer 
        className="mt-16 pt-8 border-t border-border/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 PiSphere Harmony. Construído com 💜 para a comunidade Pi Network.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
