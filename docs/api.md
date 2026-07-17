# ZENO API Documentation

Base URL: `/api`

All responses are JSON. All data is mock/demo — no real financial operations.

## Endpoints

### Health
- `GET /api/healthz` — Returns `{ status: "ok" }`

### Dashboard
- `GET /api/dashboard/summary` — Full dashboard summary including total balance, monthly stats, recent transactions, account overviews, and smart alerts.

### Accounts
- `GET /api/accounts` — List all accounts
- `GET /api/accounts/:id` — Get account by ID

### Transactions
- `GET /api/transactions` — List transactions
  - Query params: `accountId`, `category`, `limit` (default: 20)
- `GET /api/transactions/:id` — Get transaction by ID

### Cards
- `GET /api/cards` — List all cards
- `GET /api/cards/:id` — Get card by ID

### Analytics
- `GET /api/analytics/spending` — Spending breakdown by category for current month
- `GET /api/analytics/monthly` — Monthly income/expenses/savings for past 6 months

### Notifications
- `GET /api/notifications` — List all notifications

### Profile
- `GET /api/profile` — Get user profile
