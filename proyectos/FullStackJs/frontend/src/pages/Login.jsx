import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import useAuth from "../hooks/useAuth";
import { hasEmptyField } from "../validators/AccountValidator";
import axiosClient from "../config/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    const errorMsg = hasEmptyField([email, password]);
    if (errorMsg) {
      setAlert({ msg: errorMsg, error: true });
      return;
    }

    try {
      const { data } = await axiosClient.post("veterinarios/login", {
        email,
        password,
      });
      localStorage.setItem('token', data.token); 
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  }

  useEffect(() => {
    if (alert.msg) {
      setTimeout(() => {
        setAlert({});
      }, 3000);
    }
  }, [alert]);

  return (
    <>
      <div className="text-indigo-600 font-black text-6xl">
        <h1>
          Inicia Sesión y Administra tus
          <span className="text-black"> Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5">
        {alert.msg && <Alert alert={alert} />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded"
              type="email"
              placeholder="Email de Registro"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my.5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Contraseña
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded"
              type="password"
              placeholder="Tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-indigo-700 w-full py-3 md:px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
          />
        </form>

        <div className="mt-4 lg:flex lg:justify-between">
          <Link
            className="block text-center my-5 text-gray-500"
            to="/registrar"
          >
            ¿No tienes una cuenta?{" "}
            <span className="text-indigo-600 hover:text-indigo-800">
              Regístrate
            </span>
          </Link>
          <Link
            className="block text-center my-5 text-gray-500"
            to="/olvide-password"
          >
            Olvide mi contraseña
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
