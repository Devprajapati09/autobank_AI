# AutoBank AI - Architecture Specification

## Overview
AutoBank AI is constructed using a decoupled micro-architecture separated into a Client Frontend SPA, Node/Express API Gateway & Backend Services, AI Agent Execution Engine, and Data Persistence Layer.

```
+-------------------------------------------------------+
|                    React Frontend SPA                 |
|    (Redux Toolkit State, Recharts, Lucide Icons)      |
+---------------------------+---------------------------+
                            | HTTP/REST & WebSockets
+---------------------------v---------------------------+
|                   Node.js Express Backend             |
|   (JWT Auth, Controllers, Services, Middleware)       |
+-------------+-----------------------------+-----------+
              |                             |
+-------------v-------------+   +-----------v-----------+
|      AI Agent Subsystem   |   |   Data Persistence    |
| (Gemini, Tools, Workflows)|   | (MongoDB / Postgres)  |
+---------------------------+   +-----------------------+
```
