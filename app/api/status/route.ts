import { NextResponse } from 'next/server';

export async function GET() {
  const statusPayload = {
    status: 'operational',
    updated_at: new Date().toISOString(),
    services: [
      { name: 'Core API Gateway', status: 'operational', uptime_percentage: 99.98 },
      { name: 'Authentication & SSO', status: 'operational', uptime_percentage: 100.0 },
      { name: 'Database Clusters', status: 'operational', uptime_percentage: 99.95 },
      { name: 'Real-time WebSocket Service', status: 'operational', uptime_percentage: 99.89 },
    ],
  };

  return NextResponse.json(statusPayload, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
    },
  });
}
