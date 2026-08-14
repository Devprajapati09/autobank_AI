# AutoBank AI - API Reference

## Base URL
`/api/v1`

## Endpoints

### Authentication
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User authentication & JWT generation
- `GET /api/v1/auth/me` - Current session user profile

### User & KYC
- `GET /api/v1/users/profile` - Fetch detailed profile
- `POST /api/v1/kyc/submit` - Upload document & submit KYC

### Finance & Transactions
- `GET /api/v1/finance/summary` - Total balance, net worth & cash flow
- `GET /api/v1/transactions` - Paginated transaction history
- `POST /api/v1/transactions` - Record new transaction

### Budget & Bills
- `GET /api/v1/budget` - Fetch budget categories & spending
- `POST /api/v1/budget` - Set or adjust budget limit
- `GET /api/v1/bills` - Fetch upcoming and paid bills

### Loans & Savings
- `GET /api/v1/loans` - Active loans and EMI schedules
- `GET /api/v1/savings` - Savings goals and progress

### Survival & Emergency
- `GET /api/v1/survival` - Calculate financial runway & crisis plan

### AI Assistant
- `POST /api/v1/ai/chat` - Interact with autonomous financial agents
- `GET /api/v1/ai/conversations` - Retrieve conversation history
