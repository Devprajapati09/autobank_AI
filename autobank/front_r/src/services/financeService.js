import { api } from "./api";

export const financeService = {
  list: (token) => api.get("/finances", { token }),
  get: (id, token) => api.get(`/finances/${id}`, { token }),
  create: (payload, token) => api.post("/finances", payload, { token }),
  update: (id, payload, token) => api.put(`/finances/${id}`, payload, { token }),
  remove: (id, token) => api.del(`/finances/${id}`, { token }),
};
