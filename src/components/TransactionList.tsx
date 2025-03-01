
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowDownRight, ArrowUpRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface Transaction {
  id: string;
  type: 'receive' | 'send' | 'pending';
  amount: number;
  address: string;
  time: string;
}

interface TransactionListProps {
  transactions: Transaction[];
  className?: string;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, className }) => {
  return (
    <div className={cn('glass rounded-xl p-4', className)}>
      <h2 className="text-lg font-medium mb-4">Recent Transactions</h2>
      
      <div className="space-y-3">
        {transactions.map((transaction, index) => (
          <motion.div 
            key={transaction.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <TransactionIcon type={transaction.type} />
              
              <div>
                <div className="font-medium">
                  {transaction.type === 'receive' ? 'Received' : transaction.type === 'send' ? 'Sent' : 'Pending'}
                </div>
                <div className="text-xs text-white/60">
                  {transaction.address.substring(0, 6)}...{transaction.address.substring(transaction.address.length - 4)}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className={cn(
                'font-medium',
                transaction.type === 'receive' ? 'text-green-400' : 
                transaction.type === 'send' ? 'text-red-400' : 'text-yellow-400'
              )}>
                {transaction.type === 'receive' ? '+' : transaction.type === 'send' ? '-' : ''}{transaction.amount} π
              </div>
              <div className="text-xs text-white/60">{transaction.time}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const TransactionIcon: React.FC<{ type: Transaction['type'] }> = ({ type }) => {
  switch (type) {
    case 'receive':
      return (
        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
          <ArrowDownRight size={16} />
        </div>
      );
    case 'send':
      return (
        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
          <ArrowUpRight size={16} />
        </div>
      );
    case 'pending':
      return (
        <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400">
          <Clock size={16} />
        </div>
      );
  }
};

export default TransactionList;
