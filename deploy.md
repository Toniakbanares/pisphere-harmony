# 🚀 Site Online - Instruções de Deploy

## ✅ Status Atual
O site está **ONLINE** e funcionando!

**URL Local:** http://localhost:3000

## 📋 O que foi configurado:

1. **✅ Dependências instaladas** - Todas as dependências NPM foram instaladas com sucesso
2. **✅ Build de produção** - Arquivos otimizados gerados na pasta `dist/`
3. **✅ Servidor web ativo** - Usando `serve` na porta 3000

## 🖥️ Comandos utilizados:

```bash
# Instalar dependências
npm install

# Gerar build de produção
npm run build

# Instalar servidor web
npm install -g serve

# Iniciar servidor (rodando em background)
serve -s dist -l 3000
```

## 🌐 Opções para Deploy em Produção:

### 1. **Vercel** (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

### 2. **Netlify**
- Faça upload da pasta `dist/` em https://netlify.com
- Ou conecte o repositório Git

### 3. **GitHub Pages**
```bash
npm run build
# Faça push dos arquivos da pasta dist/ para branch gh-pages
```

### 4. **Servidor próprio**
- Copie os arquivos da pasta `dist/` para seu servidor web
- Configure nginx/apache para servir os arquivos estáticos

## 🔧 Gerenciar o servidor local:

```bash
# Verificar se está rodando
curl -I http://localhost:3000

# Parar o servidor (se necessário)
pkill -f "serve -s dist"

# Reiniciar servidor
serve -s dist -l 3000
```

## 📁 Estrutura de arquivos:
- `dist/` - Arquivos de produção (gerados pelo build)
- `src/` - Código fonte React/TypeScript
- `package.json` - Configurações e dependências
- `vite.config.ts` - Configuração do build

---
**✨ Seu site React com shadcn-ui está pronto e online!**