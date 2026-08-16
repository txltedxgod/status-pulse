import React from 'react';
import { ServiceCard, ServiceItem } from '../components/ServiceCard';
import { IncidentTimeline, Incident } from '../components/IncidentTimeline';
import { Activity, ShieldCheck } from 'lucide-react';

const mockServices: ServiceItem[] = [
  { id: '1', name: 'Core API Gateway', description: 'Public REST & GraphQL Endpoints', status: 'operational', uptimePercentage: 99.98 },
  { id: '2', name: 'Authentication & SSO', description: 'OAuth2 and Session Management', status: 'operational', uptimePercentage: 100.0 },
  { id: '3', name: 'Database Clusters', description: 'Primary PostgreSQL & Read Replicas', status: 'operational', uptimePercentage: 99.95 },
  { id: '4', name: 'Real-time WebSocket Service', description: 'Streaming events & subscriptions', status: 'operational', uptimePercentage: 99.89 },
];

const mockIncidents: Incident[] = [
  {
    id: 'inc-1',
    title: 'Elevated Latency in WebSocket Ingestion',
    status: 'resolved',
    createdAt: '2026-08-10',
    updates: [
      { time: 'Aug 10, 14:32 UTC', text: 'Issue resolved. All connections restored to nominal latency levels.' },
      { time: 'Aug 10, 14:15 UTC', text: 'Identified database connection pool saturation. Applying pod restart.' },
      { time: 'Aug 10, 14:02 UTC', text: 'Investigating reports of delayed message delivery.' },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-800 pb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-100">StatusPulse</h1>
            <p className="text-xs text-gray-400">Live operational dashboard & incident feed</p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4" /> All Systems Operational
        </div>
      </div>

      {/* Services List */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400">System Components</h2>
        <div className="space-y-3">
          {mockServices.map(svc => (
            <ServiceCard key={svc.id} service={svc} />
          ))}
        </div>
      </section>

      {/* Past Incidents */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400">Recent Incidents</h2>
        <IncidentTimeline incidents={mockIncidents} />
      </section>

      <footer className="text-center text-xs text-gray-600 pt-8 border-t border-gray-800">
        Powered by StatusPulse Open Source · Updated automatically every 60s
      </footer>
    </div>
  );
}
