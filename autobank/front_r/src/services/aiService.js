import { api } from "./api";

export const aiService = {
  list: (token) => api.get("/ais", { token }),
  get: (id, token) => api.get(`/ais/${id}`, { token }),
  create: (payload, token) => api.post("/ais", payload, { token }),
  update: (id, payload, token) => api.put(`/ais/${id}`, payload, { token }),
  remove: (id, token) => api.del(`/ais/${id}`, { token }),
};
