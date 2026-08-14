import { api } from "./api";

export const billService = {
  list: (token) => api.get("/bills", { token }),
  get: (id, token) => api.get(`/bills/${id}`, { token }),
  create: (payload, token) => api.post("/bills", payload, { token }),
  update: (id, payload, token) => api.put(`/bills/${id}`, payload, { token }),
  remove: (id, token) => api.del(`/bills/${id}`, { token }),
};
