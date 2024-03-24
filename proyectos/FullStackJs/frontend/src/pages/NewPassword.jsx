import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Alert from "../components/Alert";
import axiosClient from "../config/axios";
import { validatePassword } from "../validators/AccountValidator";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [existToken, setExistToken] = useState(false);
  const { token } = useParams();

  useEffect(() => {
    const checkToken = async () => {
      try {
        await axiosClient(`veterinarios/olvide-password/${token}`);
        setAlert({
          msg: "Coloca tu nueva contraseña",
        });
        setExistToken(true);
      } catch (error) {
        setAlert({
          msg: "Hubo un error con el enlace",
          error: true,
        });
      }
    };

    checkToken();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const error = validatePassword(password, confirmPassword);

    if (error.error) {
      setAlert(error);
      return;
    }

    try {
      const url = `veterinarios/olvide-password/${token}`;
      const { data } = await axiosClient.post(url, {
        password,
      });

      setAlert({
        msg: data.msg,
      });

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
          Reestablece tu Contraseña y no Pierdas a tus
          <span className="text-black"> Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5">
        {alert.msg && <Alert alert={alert} />}
        {existToken && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Nueva Contraseña
                </label>
                <input
                  className="border w-full p-3 mt-3 bg-gray-50 rounded"
                  type="password"
                  placeholder="Tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Confirma tu Nueva Contraseña
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
                value="Guardar nueva contraseña"
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
          </>
        )}
      </div>
    </>
  );
};

export default NewPassword;
