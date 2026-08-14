import { api } from "./api";

export const savingsService = {
  list: (token) => api.get("/savingss", { token }),
  get: (id, token) => api.get(`/savingss/${id}`, { token }),
  create: (payload, token) => api.post("/savingss", payload, { token }),
  update: (id, payload, token) => api.put(`/savingss/${id}`, payload, { token }),
  remove: (id, token) => api.del(`/savingss/${id}`, { token }),
};
