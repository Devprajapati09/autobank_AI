import { api } from "./api";

export const documentService = {
  list: (token) => api.get("/documents", { token }),
  get: (id, token) => api.get(`/documents/${id}`, { token }),
  create: (payload, token) => api.post("/documents", payload, { token }),
  update: (id, payload, token) => api.put(`/documents/${id}`, payload, { token }),
  remove: (id, token) => api.del(`/documents/${id}`, { token }),
};
