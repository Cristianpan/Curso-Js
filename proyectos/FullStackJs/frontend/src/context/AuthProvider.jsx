import { useState, createContext, useEffect } from "react";
import axiosClient from "../config/axios";
import getAuthorizationConfig from "../helpers/HeaderAuthorization";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState({});

  const closeSession = () => {
    localStorage.removeItem("token");
    setAuth({});
  };

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setLoading(false);
        }
        const { data } = await axiosClient(
          "veterinarios/perfil",
          getAuthorizationConfig()
        );
        setAuth(data);
      } catch (error) {
        setAuth({});
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        closeSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
