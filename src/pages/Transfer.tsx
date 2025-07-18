import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Send, CreditCard, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const Transfer = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [amount, setAmount] = useState('');
  const [pixKey, setPixKey] = useState('');
  const [isTransferring, setIsTransferring] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock balance in BRL (converted from Pi)
  const brlBalance = 4250000; // 1,000,000 Pi * 4.25 BRL

  const handleTransfer = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: t('common.error'),
        description: 'Digite um valor válido',
        variant: 'destructive',
      });
      return;
    }

    if (!pixKey) {
      toast({
        title: t('common.error'),
        description: 'Digite uma chave PIX válida',
        variant: 'destructive',
      });
      return;
    }

    if (parseFloat(amount) > brlBalance) {
      toast({
        title: t('common.error'),
        description: 'Saldo insuficiente',
        variant: 'destructive',
      });
      return;
    }

    setIsTransferring(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsTransferring(false);
      setIsDialogOpen(false);
      toast({
        title: t('common.success'),
        description: `R$ ${amount} transferido via PIX com sucesso!`,
      });
      setAmount('');
      setPixKey('');
    }, 2000);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
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
          <Send className="h-8 w-8 text-pi-purple" />
          <div>
            <h1 className="text-3xl font-bold">{t('transfer.title')}</h1>
            <p className="text-muted-foreground">{t('transfer.description')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Transfer Form */}
          <div className="lg:col-span-2">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  {t('transfer.pixTransfer')}
                </CardTitle>
                <CardDescription>
                  {t('common.balance')}: {formatCurrency(brlBalance)}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('transfer.enterAmount')}</label>
                  <Input
                    type="number"
                    placeholder="0,00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="text-lg"
                  />
                  <p className="text-xs text-muted-foreground">
                    Valor mínimo: R$ 1,00 | Valor máximo: {formatCurrency(brlBalance)}
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{t('transfer.pixKey')}</label>
                  <Input
                    type="text"
                    placeholder="Digite sua chave PIX (CPF, e-mail, telefone ou chave aleatória)"
                    value={pixKey}
                    onChange={(e) => setPixKey(e.target.value)}
                  />
                </div>

                <div className="glass rounded-lg p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Valor a transferir</span>
                    <span className="font-medium">
                      {amount ? formatCurrency(parseFloat(amount)) : 'R$ 0,00'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Taxa</span>
                    <span className="font-medium text-green-400">Grátis</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{t('transfer.processingTime')}</span>
                    <span className="font-medium text-green-400">Instantâneo</span>
                  </div>
                </div>

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full bg-gradient-to-r from-pi-purple to-pi-blue hover:from-pi-purple/80 hover:to-pi-blue/80"
                      size="lg"
                      disabled={!amount || !pixKey}
                    >
                      {t('transfer.transferNow')}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{t('transfer.confirmTransfer')}</DialogTitle>
                      <DialogDescription>
                        Confirme os dados da sua transferência PIX
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="glass rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Valor</span>
                          <span className="font-bold">
                            {amount ? formatCurrency(parseFloat(amount)) : 'R$ 0,00'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Chave PIX</span>
                          <span className="font-medium">{pixKey}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Processamento</span>
                          <span className="text-green-400">Instantâneo</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          onClick={() => setIsDialogOpen(false)}
                          className="flex-1"
                          disabled={isTransferring}
                        >
                          {t('common.cancel')}
                        </Button>
                        <Button 
                          onClick={handleTransfer}
                          className="flex-1 bg-gradient-to-r from-pi-purple to-pi-blue"
                          disabled={isTransferring}
                        >
                          {isTransferring ? (
                            <>
                              <Clock className="mr-2 h-4 w-4 animate-spin" />
                              {t('common.loading')}...
                            </>
                          ) : (
                            <>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              {t('common.confirm')}
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>

          {/* Transfer Info */}
          <div className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle>PIX Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Transferências instantâneas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Disponível 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Sem taxas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Seguro e confiável</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle>Últimas Transferências</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">R$ 500,00</p>
                    <p className="text-xs text-muted-foreground">***@gmail.com</p>
                  </div>
                  <span className="text-xs text-green-400">Concluída</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">R$ 1.200,00</p>
                    <p className="text-xs text-muted-foreground">***.***.***-**</p>
                  </div>
                  <span className="text-xs text-green-400">Concluída</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">R$ 250,00</p>
                    <p className="text-xs text-muted-foreground">(11) ***-***</p>
                  </div>
                  <span className="text-xs text-green-400">Concluída</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Transfer;