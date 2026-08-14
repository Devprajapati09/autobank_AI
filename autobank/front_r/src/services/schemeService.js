import { api } from "./api";

export const schemeService = {
  list: (token) => api.get("/schemes", { token }),
  get: (id, token) => api.get(`/schemes/${id}`, { token }),
  create: (payload, token) => api.post("/schemes", payload, { token }),
  update: (id, payload, token) => api.put(`/schemes/${id}`, payload, { token }),
  remove: (id, token) => api.del(`/schemes/${id}`, { token }),
};
