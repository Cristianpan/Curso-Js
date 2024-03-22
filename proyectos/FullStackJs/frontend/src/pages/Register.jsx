import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, email, password, confirmPassword].includes("")) {
      setAlert({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }

    if (password !== confirmPassword) {
      setAlert({
        msg: "Verifica que las constraseñas sean iguales",
        error: true,
      });
      return;
    }

    if (password.length <= 8) {
      setAlert({
        msg: "La contraseña debe de tener al menos 8 caracteres",
        error: true,
      });
      return;
    }
  };

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
        {alert?.msg && <Alert alert={alert} />}
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
              onChange={setName}
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
              onChange={setEmail}
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
              onChange={setPassword}
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
              onChange={setConfirmPassword}
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
