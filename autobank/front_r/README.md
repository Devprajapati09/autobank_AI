# AutoBank AI — Frontend

A React + Vite frontend for **AutoBank AI**, a personal money assistant built into
your bank: budgeting, bills, loans, savings, KYC/document verification, government
scheme matching, an AI chat assistant, and Smart Survival Mode for income drops.

This is a **UI prototype** wired to realistic in-memory demo data — there is no real
backend yet. `src/services/` contains a thin fetch-based API layer already pointed at
`VITE_API_BASE_URL` so you can swap in a real backend without touching components.

## Stack

- React 18 + Vite
- React Router v6
- Recharts (charts)
- lucide-react (icons)
- Plain CSS with design tokens (`src/styles/variables.css`) — no CSS framework

## Getting started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Project structure

```
src/
├── assets/           # static images/icons/fonts bundled by Vite
├── components/        # feature-grouped, reusable UI components
├── pages/              # route-level pages, grouped by feature
├── layouts/            # AuthLayout, OnboardingLayout, MainLayout (sidebar shell)
├── routes/             # AppRoutes, ProtectedRoute, PublicRoute
├── context/            # AuthContext, FinanceContext, AIContext, ThemeContext
├── hooks/              # useAuth, useFinance, useAI, useNotifications
├── services/           # fetch-based API layer (swap VITE_API_BASE_URL for a real backend)
├── data/               # demo/seed data used until a backend is connected
├── utils/              # formatting + finance calculations (EMI, affordability, etc.)
└── styles/             # design tokens + global/feature CSS
```

## Demo login

The login screen accepts any email/password (or use "Continue with demo account")
and signs you in as a demo user with pre-populated income, bills, transactions, and
budget data so every screen renders realistically without a backend.

## Connecting a real backend

1. Set `VITE_API_BASE_URL` in `.env` to your API's base URL.
2. Replace the mock logic inside `src/context/AuthContext.jsx` and
   `src/context/FinanceContext.jsx` with calls into `src/services/*Service.js`.
3. Remove the demo data imports in `src/data/` once real data is flowing.

## Design system

Colors, type, radii, and shadows are defined once in `src/styles/variables.css` —
a navy "ledger" base, a ledger-green for money/growth, and a marigold accent for
AI moments and government-scheme content. Update tokens there to re-theme the app.
