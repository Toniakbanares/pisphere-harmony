import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { ArrowRightLeft, DollarSign, Calculator, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const Exchange = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [piAmount, setPiAmount] = useState('');
  const [exchangeType, setExchangeType] = useState<'usdt' | 'brl'>('usdt');

  // Mock exchange rates
  const rates = {
    piToUsdt: 0.85,
    piToBrl: 4.25,
    usdtToBrl: 5.0
  };

  const calculateExchange = () => {
    const amount = parseFloat(piAmount) || 0;
    if (exchangeType === 'usdt') {
      return amount * rates.piToUsdt;
    } else {
      return amount * rates.piToBrl;
    }
  };

  const handleExchange = () => {
    if (!piAmount || parseFloat(piAmount) <= 0) {
      toast({
        title: t('common.error'),
        description: 'Digite uma quantidade válida de Pi',
        variant: 'destructive',
      });
      return;
    }

    const convertedAmount = calculateExchange();
    const currency = exchangeType === 'usdt' ? 'USDT' : 'BRL';
    
    toast({
      title: t('common.success'),
      description: `${piAmount} π convertido para ${convertedAmount.toFixed(2)} ${currency}`,
    });
    
    setPiAmount('');
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-4 sm:px-6 py-6 max-w-7xl mx-auto">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <ArrowRightLeft className="h-8 w-8 text-pi-blue" />
          <div>
            <h1 className="text-3xl font-bold">{t('exchange.title')}</h1>
            <p className="text-muted-foreground">{t('exchange.description')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Exchange Form */}
          <div className="lg:col-span-2">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Conversor de Pi
                </CardTitle>
                <CardDescription>
                  {t('exchange.availableBalance')}: 1,000,000.00 π
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs value={exchangeType} onValueChange={(value) => setExchangeType(value as 'usdt' | 'brl')}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="usdt">{t('exchange.piToUsdt')}</TabsTrigger>
                    <TabsTrigger value="brl">{t('exchange.piToBrl')}</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="usdt" className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t('exchange.amount')} (Pi)</label>
                      <Input
                        type="number"
                        placeholder="0.00"
                        value={piAmount}
                        onChange={(e) => setPiAmount(e.target.value)}
                        className="text-lg"
                      />
                    </div>
                    
                    <div className="glass rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{t('exchange.exchangeRate')}</span>
                        <span className="font-medium">1 π = {rates.piToUsdt} USDT</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-muted-foreground">{t('exchange.estimatedReceive')}</span>
                        <span className="text-lg font-bold text-green-400">
                          {calculateExchange().toFixed(2)} USDT
                        </span>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="brl" className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t('exchange.amount')} (Pi)</label>
                      <Input
                        type="number"
                        placeholder="0.00"
                        value={piAmount}
                        onChange={(e) => setPiAmount(e.target.value)}
                        className="text-lg"
                      />
                    </div>
                    
                    <div className="glass rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{t('exchange.exchangeRate')}</span>
                        <span className="font-medium">1 π = R$ {rates.piToBrl}</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-muted-foreground">{t('exchange.estimatedReceive')}</span>
                        <span className="text-lg font-bold text-green-400">
                          R$ {calculateExchange().toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <Button 
                  onClick={handleExchange}
                  className="w-full bg-gradient-to-r from-pi-blue to-pi-purple hover:from-pi-blue/80 hover:to-pi-purple/80"
                  size="lg"
                >
                  {t('exchange.convert')}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Market Info */}
          <div className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Cotações em Tempo Real
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Pi/USDT</span>
                  <span className="font-bold text-green-400">$0.85</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Pi/BRL</span>
                  <span className="font-bold text-green-400">R$ 4.25</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>USDT/BRL</span>
                  <span className="font-bold">R$ 5.00</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle>Volume 24h</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Pi negociado</span>
                    <span className="font-medium">2.4M π</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Volume em USD</span>
                    <span className="font-medium">$2.04M</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Exchange;