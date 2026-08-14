# AutoBank AI - Database Design Specifications

## Entities & Relationships

- **User (1) <---> (N) Account**: A user can have multiple savings, checking, and investment accounts.
- **User (1) <---> (N) Transaction**: All deposits and withdrawals belong to a specific user and account.
- **User (1) <---> (N) Budget**: Budgets track spending limits by category per monthly cycle.
- **User (1) <---> (N) Bill**: Tracks recurring obligations, payment schedules, and status.
- **User (1) <---> (N) Loan**: Amortization data, interest rates, and monthly EMI.
- **User (1) <---> (N) AIConversation**: Stores multi-turn chat history with autonomous agents.
- **User (1) <---> (1) KYC**: Stores verification documents, status, and audit timestamps.
