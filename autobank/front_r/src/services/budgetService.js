import { api } from "./api";

export const budgetService = {
  list: (token) => api.get("/budgets", { token }),
  get: (id, token) => api.get(`/budgets/${id}`, { token }),
  create: (payload, token) => api.post("/budgets", payload, { token }),
  update: (id, payload, token) => api.put(`/budgets/${id}`, payload, { token }),
  remove: (id, token) => api.del(`/budgets/${id}`, { token }),
};
