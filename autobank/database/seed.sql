-- AutoBank AI Database Seed Data

INSERT INTO users (id, name, email, password_hash, role, is_kyc_verified)
VALUES 
('usr_admin_001', 'System Admin', 'admin@autobank.ai', '$2a$10$X87K1zXqgZ1Y2Z3W4V5U6uO7P8Q9R0S1T2U3V4W5X6Y7Z8', 'admin', TRUE),
('usr_demo_002', 'Demo User', 'demo@autobank.ai', '$2a$10$X87K1zXqgZ1Y2Z3W4V5U6uO7P8Q9R0S1T2U3V4W5X6Y7Z8', 'user', TRUE);

INSERT INTO accounts (id, user_id, account_number, account_type, balance, currency)
VALUES
('acc_001', 'usr_demo_002', 'AB-88392019', 'savings', 250000.00, 'INR'),
('acc_002', 'usr_demo_002', 'AB-99201948', 'investment', 125000.00, 'INR');

INSERT INTO budgets (id, user_id, category, limit_amount, spent_amount, month, year)
VALUES
('bgt_001', 'usr_demo_002', 'Groceries', 20000.00, 12450.00, 8, 2026),
('bgt_002', 'usr_demo_002', 'Utilities', 10000.00, 4800.00, 8, 2026),
('bgt_003', 'usr_demo_002', 'Entertainment', 15000.00, 9200.00, 8, 2026);
