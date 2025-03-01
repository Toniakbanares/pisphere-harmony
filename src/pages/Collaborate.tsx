
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import CollaborateItem from '@/components/CollaborateItem';
import { Users, Plus, MessageSquare, Code, Lightbulb, Filter } from 'lucide-react';

const Collaborate = () => {
  // Mock data
  const projects = [
    {
      id: '1',
      title: 'Pi Network Marketplace App',
      description: 'Building a mobile app for Pi Network that connects local merchants with customers. Looking for React Native developers and UI/UX designers.',
      participants: 8,
      lastActive: '2 hours ago',
      tags: ['Development', 'Mobile', 'React Native']
    },
    {
      id: '2',
      title: 'Pi Community Education Initiative',
      description: 'Creating educational content about cryptocurrency, blockchain, and Pi Network for beginners. Join our team of content creators!',
      participants: 12,
      lastActive: '4 hours ago',
      tags: ['Education', 'Content', 'Beginners']
    },
    {
      id: '3',
      title: 'Decentralized Voting System',
      description: 'Developing a blockchain-based voting system using Pi Network for community decision making. Need blockchain experts and backend developers.',
      participants: 5,
      lastActive: 'yesterday',
      tags: ['Blockchain', 'Voting', 'Backend']
    },
    {
      id: '4',
      title: 'Pi Network Analytics Dashboard',
      description: 'Creating a dashboard to visualize Pi Network statistics and trends. Looking for data scientists and frontend developers.',
      participants: 6,
      lastActive: '3 days ago',
      tags: ['Data', 'Analytics', 'Dashboard']
    },
    {
      id: '5',
      title: 'Pi Network Marketing Campaign',
      description: 'Planning and executing a marketing campaign to increase Pi Network adoption. Need marketers, designers, and social media experts.',
      participants: 9,
      lastActive: 'a week ago',
      tags: ['Marketing', 'Design', 'Social Media']
    }
  ];
  
  // Tabs data
  const tabs = [
    { icon: <Users size={18} />, label: 'All Projects' },
    { icon: <MessageSquare size={18} />, label: 'Discussions' },
    { icon: <Code size={18} />, label: 'Development' },
    { icon: <Lightbulb size={18} />, label: 'Ideas' }
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
            <Users className="mr-2" /> Pi Collaborate
          </h1>
          <p className="text-white/70 mt-1">Connect and collaborate with pioneers on projects</p>
        </motion.div>
        
        <button className="mt-4 sm:mt-0 px-4 py-2 rounded-lg bg-gradient-to-r from-pi-blue to-pi-purple text-white flex items-center">
          <Plus size={18} className="mr-2" /> New Project
        </button>
      </div>
      
      <div className="flex overflow-x-auto scrollbar-hide mb-6">
        <div className="flex space-x-2 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                index === 0 
                  ? 'bg-gradient-to-r from-pi-blue to-pi-purple text-white' 
                  : 'glass hover:bg-white/10 transition-colors'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Active Projects</h2>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-lg glass hover:bg-white/10 transition-colors">
                <Filter size={18} />
              </button>
              
              <select className="glass rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pi-blue/50">
                <option>Most Recent</option>
                <option>Most Popular</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            {projects.map((project) => (
              <CollaborateItem
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                participants={project.participants}
                lastActive={project.lastActive}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
        
        <div>
          <div className="glass rounded-xl p-5 mb-6">
            <h3 className="font-medium mb-4">Your Contributions</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white/70">Projects Joined</span>
                <span className="font-medium">5</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-white/70">Contributions</span>
                <span className="font-medium">23</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-white/70">Reputation Score</span>
                <span className="font-medium text-pi-gold">92/100</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/10">
              <button className="w-full py-2 rounded-lg glass hover:bg-white/10 transition-colors">
                View Profile
              </button>
            </div>
          </div>
          
          <div className="glass rounded-xl p-5">
            <h3 className="font-medium mb-4">Trending Skills</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Blockchain Development</span>
                <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pi-blue to-pi-purple w-5/6"></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span>UI/UX Design</span>
                <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pi-blue to-pi-purple w-4/6"></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Community Management</span>
                <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pi-blue to-pi-purple w-3/4"></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Smart Contract Development</span>
                <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pi-blue to-pi-purple w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
