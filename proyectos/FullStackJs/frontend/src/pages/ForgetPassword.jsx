import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import { useEffect, useState } from "react";
import axiosClient from "../config/axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setAlert({});
    }, 3500);
  }, [alert]);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      if (email === "") {
        setAlert({ msg: "El email es obligatorio", error: true });
        return;
      }
      const { data } = await axiosClient.post("veterinarios/olvide-password", {
        email,
      });
      setAlert({ msg: data.msg, error: false });
      this.reset();
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  }

  return (
    <>
      <div className="text-indigo-600 font-black text-6xl">
        <h1>
          Recupera tu Acceso y no Pierdas tus
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
          <input
            type="submit"
            value="Enviar Instrucciones"
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
            to="/registrar"
          >
            ¿No tienes una cuenta?{" "}
            <span className="text-indigo-600 hover:text-indigo-800">
              Regístrate
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
