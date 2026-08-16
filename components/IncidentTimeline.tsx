import React from 'react';

export interface Incident {
  id: string;
  title: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  createdAt: string;
  updates: { time: string; text: string }[];
}

export const IncidentTimeline: React.FC<{ incidents: Incident[] }> = ({ incidents }) => {
  if (incidents.length === 0) {
    return (
      <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 text-center text-sm text-gray-400">
        ✨ No active or recent incidents reported in the last 90 days.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {incidents.map(inc => (
        <div key={inc.id} className="bg-gray-900/60 border border-gray-800 rounded-xl p-5">
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-semibold text-gray-100 text-sm">{inc.title}</h4>
            <span className="text-xs uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
              {inc.status}
            </span>
          </div>
          <div className="space-y-2 border-l-2 border-gray-800 pl-4 ml-1">
            {inc.updates.map((up, i) => (
              <div key={i} className="text-xs">
                <span className="text-gray-500 font-mono">{up.time}</span>
                <p className="text-gray-300 mt-0.5">{up.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
