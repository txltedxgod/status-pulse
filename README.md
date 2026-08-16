# status-pulse

> Modern open-source public service status page and incident communication portal built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=nextdotjs)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker)](https://docker.com)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

`#status-page` `#incident-management` `#nextjs` `#react` `#typescript` `#tailwindcss` `#devops` `#fullstack`

---

## Features

- **Component Health Overview:** Visual operational status badges across all services and infrastructure components.
- **60-Day Interactive Uptime Bar:** Visual day-by-day availability percentage breakdown with color-coded degradation indicators.
- **Incident Timeline & Updates:** Chronological incident communication feed with timestamped investigation milestones.
- **Public Status API:** Built-in cached JSON endpoint (`/api/status`) for automated consumption by third-party health checkers.
- **Sleek Dark Theme:** Modern glassmorphism UI styled with Tailwind CSS.

## Quick Start

### Local Development

```bash
npm install
npm run dev
```

Navigate to `http://localhost:3000` in your browser.

### Docker

```bash
docker build -t status-pulse .
docker run -d -p 3000:3000 status-pulse
```

## API

`GET /api/status` returns:

```json
{
  "status": "operational",
  "updated_at": "2026-08-16T22:00:00Z",
  "services": [
    { "name": "Core API Gateway", "status": "operational", "uptime_percentage": 99.98 }
  ]
}
```
