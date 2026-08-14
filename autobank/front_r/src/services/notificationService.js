import { api } from "./api";

export const notificationService = {
  list: (token) => api.get("/notifications", { token }),
  get: (id, token) => api.get(`/notifications/${id}`, { token }),
  create: (payload, token) => api.post("/notifications", payload, { token }),
  update: (id, payload, token) => api.put(`/notifications/${id}`, payload, { token }),
  remove: (id, token) => api.del(`/notifications/${id}`, { token }),
};
