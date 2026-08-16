import React from 'react';

interface UptimeBarProps {
  uptimePercentage: number;
  days?: number;
}

export const UptimeBar: React.FC<UptimeBarProps> = ({ uptimePercentage, days = 60 }) => {
  // Generate 60 day history segments
  const bars = Array.from({ length: days }).map((_, i) => {
    // Inject a simulated minor degradation occasionally for realism
    const isDegraded = i === 42 || i === 18;
    return isDegraded ? 'bg-amber-400' : 'bg-emerald-500';
  });

  return (
    <div className="space-y-1 mt-3">
      <div className="flex gap-1 h-7 items-center">
        {bars.map((color, idx) => (
          <div
            key={idx}
            className={`flex-1 h-full rounded-sm ${color} transition-opacity hover:opacity-75 cursor-pointer`}
            title={`Day ${days - idx}: Operational`}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-500 pt-1">
        <span>{days} days ago</span>
        <span className="font-semibold text-emerald-400">{uptimePercentage}% uptime</span>
        <span>Today</span>
      </div>
    </div>
  );
};
