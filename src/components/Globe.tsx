
import React, { useRef, useEffect } from 'react';

const Globe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    const draw = () => {
      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const maxRadius = Math.min(canvas.width, canvas.height) / 3;
        
        // Ensure radius is always positive
        const radius = Math.max(maxRadius, 10);
        
        // Draw globe outline
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Draw rotating lines
        for (let i = 0; i < 6; i++) {
          const angle = (time * 0.01) + (i * Math.PI / 3);
          const x1 = centerX + Math.cos(angle) * radius * 0.8;
          const y1 = centerY + Math.sin(angle) * radius * 0.8;
          const x2 = centerX + Math.cos(angle + Math.PI) * radius * 0.8;
          const y2 = centerY + Math.sin(angle + Math.PI) * radius * 0.8;
          
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 + Math.sin(time * 0.02 + i) * 0.2})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
        
        // Draw dots
        for (let i = 0; i < 12; i++) {
          const angle = (time * 0.005) + (i * Math.PI / 6);
          const dotRadius = radius * (0.9 + Math.sin(time * 0.01 + i) * 0.1);
          const x = centerX + Math.cos(angle) * dotRadius;
          const y = centerY + Math.sin(angle) * dotRadius;
          
          ctx.fillStyle = `rgba(139, 92, 246, ${0.5 + Math.sin(time * 0.03 + i) * 0.3})`;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
        
        time++;
        animationId = requestAnimationFrame(draw);
      } catch (error) {
        console.error('Error in draw function:', error);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default Globe;
