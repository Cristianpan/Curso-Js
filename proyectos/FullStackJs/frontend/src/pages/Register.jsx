import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import axiosClient from "../config/axios";
import UserValidator from "../validators/UserValidator";

const Register = () => {
  const [alert, setAlert] = useState({
    msg: "",
    error: false,
  });
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const errorMsg = UserValidator.validateAccount(user);

      if (errorMsg) {
        setAlert({ msg: errorMsg, error: Boolean(errorMsg) });
        return;
      }

      await axiosClient.post("veterinarios", user);
      setAlert({
        msg: "Usuario creado correctamente, por favor revisa tu email",
        error: false,
      });
      this.reset(); 
    } catch (error) {
      console.log(error); 
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  }

  useEffect(() => {
    if (alert.msg) {
      setTimeout(() => {
        setAlert({ msg: "" });
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
              name="name"
              value={user.name}
              onChange={handleInputChange}
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
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Contraseña
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded"
              type="password"
              placeholder="Tu contraseña"
              value={user.password}
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Confirma tu Contraseña
            </label>
            <input
              className="border w-full p-3 mt-3 bg-gray-50 rounded"
              type="password"
              placeholder="Tu contraseña"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleInputChange}
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
