# Dashboard Starter

This starter kit mirrors the structure described in Module 3 and gives participants a working baseline for the real-time engagement dashboard challenge.

## Structure

```
dashboard-starter/
├── backend/                # Express API (http://localhost:4000)
├── frontend/               # Vite + React client (http://localhost:5173)
├── fixtures/mock-metrics.json
└── README.md (this file)
```

## Backend

```bash
cd modules/03-full-stack/dashboard-starter/backend
npm install
npm run dev
```

Endpoints:
- `GET /health` – status check
- `GET /metrics` – snapshot of KPIs
- `GET /metrics/live` – Server-Sent Events stream of live data
- `GET /topics` – trending topics (supports `?limit=`)

## Frontend

```bash
cd modules/03-full-stack/dashboard-starter/frontend
npm install
npm run dev
```

Key files:
- `src/hooks/useMetrics.ts` – handles polling + SSE fallback
- `src/components/Dashboard.tsx` – renders widgets
- `src/App.tsx` – layout + filters

The frontend expects the backend running on port 4000. Update `VITE_API_URL` env var if needed.

## Solutions

Check `solutions/` for a reference implementation.
