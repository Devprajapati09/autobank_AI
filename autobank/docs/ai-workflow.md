# AutoBank AI - Agent Workflows & Execution Pipeline

The AI system processes requests using a 6-stage autonomous workflow engine:

1. **Understand Workflow**: Parsers input intent, extracts entities (amounts, dates, categories).
2. **Plan Workflow**: Formulates a structured multi-step plan using specific agent tools.
3. **Approval Workflow**: Evaluates risk level; triggers human-in-the-loop confirmation for sensitive financial transactions.
4. **Action Workflow**: Executes backend service calls safely.
5. **Verification Workflow**: Audits execution results against expected targets.
6. **Adaptation Workflow**: Learns from user feedback and updates user preference vectors.
