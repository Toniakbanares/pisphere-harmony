
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface GlobeProps {
  className?: string;
}

const Globe: React.FC<GlobeProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Globe parameters
    const centerX = canvas.clientWidth / 2;
    const centerY = canvas.clientHeight / 2;
    const radius = Math.min(canvas.clientWidth, canvas.clientHeight) * 0.3;
    
    // Create nodes
    const nodesCount = 40;
    const nodes: { x: number; y: number; size: number; pulse: number; speed: number }[] = [];
    
    for (let i = 0; i < nodesCount; i++) {
      // Generate random position on the globe surface
      const angle1 = Math.random() * Math.PI * 2;
      const angle2 = Math.random() * Math.PI * 2;
      
      const x = centerX + radius * Math.sin(angle1) * Math.cos(angle2);
      const y = centerY + radius * Math.sin(angle1) * Math.sin(angle2);
      
      nodes.push({
        x,
        y,
        size: 1 + Math.random() * 2,
        pulse: Math.random() * 2 * Math.PI, // Random starting phase
        speed: 0.02 + Math.random() * 0.03 // Random speed
      });
    }
    
    // Animation variables
    let animationFrameId: number;
    let rotation = 0;
    
    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      
      // Update rotation
      rotation += 0.001;
      
      // Draw globe outline
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Draw grid lines
      const gridCount = 8;
      
      // Longitudinal lines
      for (let i = 0; i < gridCount; i++) {
        const angle = (i / gridCount) * Math.PI * 2 + rotation;
        
        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY,
          radius * Math.abs(Math.cos(angle)),
          radius,
          0,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = 'rgba(14, 165, 233, 0.1)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      
      // Latitudinal lines
      for (let i = 1; i < gridCount / 2; i++) {
        const height = radius * Math.sin((i / (gridCount / 2)) * Math.PI);
        const circleRadius = Math.cos((i / (gridCount / 2)) * Math.PI) * radius;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY + height, circleRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(14, 165, 233, 0.1)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(centerX, centerY - height, circleRadius, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Update pulse
        node.pulse += node.speed;
        
        // Calculate node position with rotation
        const nodeAngle = Math.atan2(node.y - centerY, node.x - centerX) + rotation * 0.5;
        const distance = Math.sqrt(Math.pow(node.x - centerX, 2) + Math.pow(node.y - centerY, 2));
        const newX = centerX + distance * Math.cos(nodeAngle);
        const newY = centerY + distance * Math.sin(nodeAngle);
        
        // Draw node with pulsating effect
        const pulseSize = node.size * (0.8 + 0.4 * Math.sin(node.pulse));
        
        ctx.beginPath();
        ctx.arc(newX, newY, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${0.5 + 0.3 * Math.sin(node.pulse)})`;
        ctx.fill();
        
        // Draw glow
        ctx.beginPath();
        ctx.arc(newX, newY, pulseSize * 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(newX, newY, pulseSize * 0.5, newX, newY, pulseSize * 2);
        gradient.addColorStop(0, 'rgba(14, 165, 233, 0.3)');
        gradient.addColorStop(1, 'rgba(14, 165, 233, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      }
      
      // Draw occasional transaction line
      if (Math.random() < 0.02) {
        const node1 = nodes[Math.floor(Math.random() * nodes.length)];
        const node2 = nodes[Math.floor(Math.random() * nodes.length)];
        
        ctx.beginPath();
        ctx.moveTo(
          centerX + (node1.x - centerX) * Math.cos(rotation) - (node1.y - centerY) * Math.sin(rotation),
          centerY + (node1.x - centerX) * Math.sin(rotation) + (node1.y - centerY) * Math.cos(rotation)
        );
        ctx.lineTo(
          centerX + (node2.x - centerX) * Math.cos(rotation) - (node2.y - centerY) * Math.sin(rotation),
          centerY + (node2.x - centerX) * Math.sin(rotation) + (node2.y - centerY) * Math.cos(rotation)
        );
        
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.8)';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Draw small pulse at transaction end
        ctx.beginPath();
        ctx.arc(
          centerX + (node2.x - centerX) * Math.cos(rotation) - (node2.y - centerY) * Math.sin(rotation),
          centerY + (node2.x - centerX) * Math.sin(rotation) + (node2.y - centerY) * Math.cos(rotation),
          3,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = 'rgba(139, 92, 246, 0.8)';
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className={cn('w-full h-full', className)}
    />
  );
};

export default Globe;
