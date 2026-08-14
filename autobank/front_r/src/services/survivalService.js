import { api } from "./api";

export const survivalService = {
  list: (token) => api.get("/survivals", { token }),
  get: (id, token) => api.get(`/survivals/${id}`, { token }),
  create: (payload, token) => api.post("/survivals", payload, { token }),
  update: (id, payload, token) => api.put(`/survivals/${id}`, payload, { token }),
  remove: (id, token) => api.del(`/survivals/${id}`, { token }),
};
