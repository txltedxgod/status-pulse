import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'StatusPulse — System Status & Incident Feed',
  description: 'Live uptime status, latency indicators, and incident communication portal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased flex flex-col items-center py-12 px-4">
        <main className="w-full max-w-4xl">{children}</main>
      </body>
    </html>
  );
}
