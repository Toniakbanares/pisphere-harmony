#!/bin/bash

# Script para gerenciar o servidor web do site
# Uso: ./server.sh [start|stop|restart|status]

case "$1" in
    start)
        echo "🚀 Iniciando servidor web..."
        if pgrep -f "serve -s dist" > /dev/null; then
            echo "⚠️  Servidor já está rodando!"
            echo "📍 Acesse: http://localhost:3000"
        else
            serve -s dist -l 3000 &
            echo "✅ Servidor iniciado com sucesso!"
            echo "📍 Acesse: http://localhost:3000"
        fi
        ;;
    stop)
        echo "🛑 Parando servidor web..."
        pkill -f "serve -s dist"
        echo "✅ Servidor parado!"
        ;;
    restart)
        echo "🔄 Reiniciando servidor web..."
        pkill -f "serve -s dist"
        sleep 2
        serve -s dist -l 3000 &
        echo "✅ Servidor reiniciado!"
        echo "📍 Acesse: http://localhost:3000"
        ;;
    status)
        if pgrep -f "serve -s dist" > /dev/null; then
            echo "✅ Servidor está ONLINE"
            echo "📍 URL: http://localhost:3000"
            echo "🔍 PID: $(pgrep -f 'serve -s dist')"
        else
            echo "❌ Servidor está OFFLINE"
        fi
        ;;
    build)
        echo "🔨 Fazendo build do projeto..."
        npm run build
        echo "✅ Build concluído!"
        ;;
    deploy)
        echo "🔨 Fazendo build..."
        npm run build
        echo "🚀 Iniciando servidor..."
        pkill -f "serve -s dist" 2>/dev/null
        serve -s dist -l 3000 &
        echo "✅ Site deployado com sucesso!"
        echo "📍 Acesse: http://localhost:3000"
        ;;
    *)
        echo "🌐 Gerenciador do Servidor Web"
        echo "Uso: $0 {start|stop|restart|status|build|deploy}"
        echo ""
        echo "Comandos:"
        echo "  start   - Inicia o servidor web"
        echo "  stop    - Para o servidor web"
        echo "  restart - Reinicia o servidor web"
        echo "  status  - Verifica status do servidor"
        echo "  build   - Faz build do projeto"
        echo "  deploy  - Build + start servidor"
        echo ""
        echo "📍 URL: http://localhost:3000"
        ;;
esac