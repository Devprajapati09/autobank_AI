import { api } from "./api";

export const transactionService = {
  list: (token) => api.get("/transactions", { token }),
  get: (id, token) => api.get(`/transactions/${id}`, { token }),
  create: (payload, token) => api.post("/transactions", payload, { token }),
  update: (id, payload, token) => api.put(`/transactions/${id}`, payload, { token }),
  remove: (id, token) => api.del(`/transactions/${id}`, { token }),
};
