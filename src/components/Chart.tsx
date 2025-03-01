
import React from 'react';
import { cn } from '@/lib/utils';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: any[];
  className?: string;
  dataKey: string;
  xAxisKey: string;
  color?: string;
  gradientFrom?: string;
  gradientTo?: string;
  title?: string;
}

const Chart: React.FC<ChartProps> = ({
  data,
  className,
  dataKey,
  xAxisKey,
  color = '#0EA5E9',
  gradientFrom = 'rgba(14, 165, 233, 0.5)',
  gradientTo = 'rgba(14, 165, 233, 0)',
  title
}) => {
  return (
    <div className={cn('glass rounded-xl p-4', className)}>
      {title && <h3 className="font-medium mb-4">{title}</h3>}
      
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id={`gradient-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={gradientFrom} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={gradientTo} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis 
              dataKey={xAxisKey} 
              tick={{ fill: 'rgba(255, 255, 255, 0.7)', fontSize: 12 }}
              axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
              tickLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
            />
            <YAxis 
              tick={{ fill: 'rgba(255, 255, 255, 0.7)', fontSize: 12 }}
              axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
              tickLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.5rem',
                color: 'white'
              }}
            />
            <Area 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              strokeWidth={2}
              fillOpacity={1} 
              fill={`url(#gradient-${dataKey})`} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
