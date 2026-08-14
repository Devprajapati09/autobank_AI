import { createContext, useState } from "react";
import { demoUser } from "../data/demoUser";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, _password) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setUser({ ...demoUser, email: email || demoUser.email });
    setLoading(false);
    return true;
  };

  const register = async (name, email) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setUser({ ...demoUser, name: name || demoUser.name, email: email || demoUser.email, kycStatus: "pending" });
    setLoading(false);
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}
