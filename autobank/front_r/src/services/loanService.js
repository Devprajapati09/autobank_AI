import { api } from "./api";

export const loanService = {
  list: (token) => api.get("/loans", { token }),
  get: (id, token) => api.get(`/loans/${id}`, { token }),
  create: (payload, token) => api.post("/loans", payload, { token }),
  update: (id, payload, token) => api.put(`/loans/${id}`, payload, { token }),
  remove: (id, token) => api.del(`/loans/${id}`, { token }),
};
