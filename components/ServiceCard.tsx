import React from 'react';
import { UptimeBar } from './UptimeBar';
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  status: 'operational' | 'degraded' | 'outage';
  uptimePercentage: number;
}

export const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  const getStatusBadge = () => {
    switch (service.status) {
      case 'operational':
        return (
          <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-3.5 h-3.5" /> Operational
          </span>
        );
      case 'degraded':
        return (
          <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <AlertTriangle className="w-3.5 h-3.5" /> Degraded
          </span>
        );
      case 'outage':
        return (
          <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <XCircle className="w-3.5 h-3.5" /> Major Outage
          </span>
        );
    }
  };

  return (
    <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5 shadow-lg backdrop-blur-sm">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-base text-gray-100">{service.name}</h3>
          <p className="text-xs text-gray-400">{service.description}</p>
        </div>
        {getStatusBadge()}
      </div>
      <UptimeBar uptimePercentage={service.uptimePercentage} />
    </div>
  );
};
