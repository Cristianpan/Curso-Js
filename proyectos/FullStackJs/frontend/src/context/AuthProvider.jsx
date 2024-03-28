import { useState, createContext, useEffect } from "react";
import axiosClient from "../config/axios";
import getAuthorizatioConfig from "../helpers/HeaderAuthorization";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState({});

  const updateProfile = async (profile) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setCargando(false);
      }

      const config = getAuthorizatioConfig();
      const { data } = await axiosClient.put(
        `veterinarios/perfil/${auth._id}`,
        profile,
        config
      );

      setAuth(data);

      return "El perfil ha sido actualizado";
    } catch (error) {
      throw error;
    }
  };

  const savePassword = async (password) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
      }

      const url = `veterinarios/perfil/actualizar-password`;
      const config = getAuthorizatioConfig();
      const { data } = await axiosClient.put(url, password, config);

      return data.msg;
    } catch (error) {
      throw error;
    }
  };

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
          getAuthorizatioConfig()
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
        loading,
        setAuth,
        closeSession,
        updateProfile,
        savePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
