import { api } from "./api";

export const authService = {
  login: (email, password) => api.post("/auth/login", { email, password }),
  register: (payload) => api.post("/auth/register", payload),
  forgotPassword: (email) => api.post("/auth/forgot-password", { email }),
  resetPassword: (token, password) => api.post("/auth/reset-password", { token, password }),
  me: (token) => api.get("/auth/me", { token }),
};
