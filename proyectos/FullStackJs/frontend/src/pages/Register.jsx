import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import validateAccount from "../validators/AccountValidator";
import axiosClient from "../config/axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    const error = validateAccount(name, email, password, confirmPassword);

    if (error.error) {
      setAlert(error);
      return;
    }

    try {
      await axiosClient.post('veterinarios', { name, email, password });
      setAlert({
        msg: "Usuario creado correctamente, por favor revisa tu email",
        error: false,
      });
      setEmail("");
      setName("");
      setConfirmPassword("");
      setPassword("");
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
          Crea tu Cuenta y Administra tus
          <span className="text-black"> Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5">
        {alert.msg && <Alert alert={alert} />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Nombre
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded"
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="my.5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Confirma tu Contraseña
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded"
              type="password"
              placeholder="Tu contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Crear Cuenta"
            className="bg-indigo-700 w-full py-3 md:px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
          />
        </form>

        <div className="mt-4 lg:flex lg:justify-between">
          <Link className="block text-center my-5 text-gray-500" to="/">
            ¿Ya tienes una cuenta?{" "}
            <span className="text-indigo-600 hover:text-indigo-800">
              Inicia Sesión
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

export default Register;
