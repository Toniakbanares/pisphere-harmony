
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Chart from '@/components/Chart';
import StatCard from '@/components/StatCard';
import { BarChart3, TrendingUp, Users, Lock, Activity, Zap, Globe, Clock } from 'lucide-react';

const Pulse = () => {
  // Mock data for charts
  const transactionData = [
    { name: 'Jan', amount: 5000 },
    { name: 'Feb', amount: 7500 },
    { name: 'Mar', amount: 12000 },
    { name: 'Apr', amount: 9800 },
    { name: 'May', amount: 15000 },
    { name: 'Jun', amount: 18500 },
    { name: 'Jul', amount: 22000 }
  ];
  
  const userGrowthData = [
    { month: 'Jan', users: 1200 },
    { month: 'Feb', users: 1900 },
    { month: 'Mar', users: 3000 },
    { month: 'Apr', users: 4800 },
    { month: 'May', users: 6200 },
    { month: 'Jun', users: 8500 },
    { month: 'Jul', users: 11000 }
  ];
  
  const kycProgressData = [
    { date: '2023-01', percentage: 25 },
    { date: '2023-02', percentage: 32 },
    { date: '2023-03', percentage: 38 },
    { date: '2023-04', percentage: 45 },
    { date: '2023-05', percentage: 52 },
    { date: '2023-06', percentage: 58 },
    { date: '2023-07', percentage: 65 }
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
            <BarChart3 className="mr-2" /> Pi Pulse
          </h1>
          <p className="text-white/70 mt-1">Real-time analytics and insights of the Pi Network</p>
        </motion.div>
        
        <div className="glass px-4 py-2 rounded-lg mt-4 sm:mt-0 flex items-center space-x-2">
          <Clock size={18} />
          <span>Last updated: 2 minutes ago</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Total Transactions"
          value="3.2M+"
          icon={<Activity size={18} className="text-pi-blue" />}
          change={{ value: 12.4, isPositive: true }}
        />
        
        <StatCard
          title="Active Pioneers"
          value="35M+"
          icon={<Users size={18} className="text-pi-purple" />}
          change={{ value: 5.7, isPositive: true }}
        />
        
        <StatCard
          title="KYC Progress"
          value="65%"
          icon={<Lock size={18} className="text-pi-gold" />}
          change={{ value: 2.3, isPositive: true }}
        />
        
        <StatCard
          title="Network Growth"
          value="+15.2%"
          icon={<TrendingUp size={18} className="text-green-400" />}
          change={{ value: 3.8, isPositive: true }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Chart
          data={transactionData}
          dataKey="amount"
          xAxisKey="name"
          color="#0EA5E9"
          gradientFrom="rgba(14, 165, 233, 0.5)"
          gradientTo="rgba(14, 165, 233, 0)"
          title="Transaction Volume (Pi)"
        />
        
        <Chart
          data={userGrowthData}
          dataKey="users"
          xAxisKey="month"
          color="#8B5CF6"
          gradientFrom="rgba(139, 92, 246, 0.5)"
          gradientTo="rgba(139, 92, 246, 0)"
          title="Pioneer Growth (Millions)"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Chart
            data={kycProgressData}
            dataKey="percentage"
            xAxisKey="date"
            color="#F59E0B"
            gradientFrom="rgba(245, 158, 11, 0.5)"
            gradientTo="rgba(245, 158, 11, 0)"
            title="KYC Verification Progress (%)"
          />
        </div>
        
        <div className="glass rounded-xl p-5">
          <h3 className="font-medium mb-4">Network Highlights</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-white/5 text-pi-blue">
                <Zap size={18} />
              </div>
              
              <div>
                <h4 className="font-medium">Record Transactions</h4>
                <p className="text-white/70 text-sm mt-1">
                  The network processed over 500,000 transactions in a single day last week.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-white/5 text-pi-purple">
                <Globe size={18} />
              </div>
              
              <div>
                <h4 className="font-medium">Global Adoption</h4>
                <p className="text-white/70 text-sm mt-1">
                  Pi Network is now used in over 190 countries worldwide with rapid growth.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-white/5 text-pi-gold">
                <Users size={18} />
              </div>
              
              <div>
                <h4 className="font-medium">Community Growth</h4>
                <p className="text-white/70 text-sm mt-1">
                  Pioneer community grew by 25% in the last quarter alone.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/10">
            <button className="w-full py-2 rounded-lg glass hover:bg-white/10 transition-colors text-sm">
              View Detailed Reports
            </button>
          </div>
        </div>
      </div>
      
      <div className="glass rounded-xl p-6">
        <h2 className="text-xl font-medium mb-6">Ecosystem Growth</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full glass flex items-center justify-center mb-4 text-pi-blue">
              <Store size={32} />
            </div>
            
            <h3 className="font-medium text-lg">Pi Market</h3>
            <p className="text-white/70 text-sm mt-2">
              Over 12,000 merchants now accepting Pi as payment for goods and services.
            </p>
            
            <div className="mt-4 text-pi-blue font-medium">
              +28% growth
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full glass flex items-center justify-center mb-4 text-pi-purple">
              <Code size={32} />
            </div>
            
            <h3 className="font-medium text-lg">Developer Activity</h3>
            <p className="text-white/70 text-sm mt-2">
              750+ active developers building applications on the Pi Network ecosystem.
            </p>
            
            <div className="mt-4 text-pi-purple font-medium">
              +42% growth
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full glass flex items-center justify-center mb-4 text-pi-gold">
              <Globe size={32} />
            </div>
            
            <h3 className="font-medium text-lg">Global Usage</h3>
            <p className="text-white/70 text-sm mt-2">
              Pi services now available in 32 languages, supporting global community needs.
            </p>
            
            <div className="mt-4 text-pi-gold font-medium">
              +18% growth
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Additional icons
const Store = ({ size, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const Code = ({ size, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

export default Pulse;
