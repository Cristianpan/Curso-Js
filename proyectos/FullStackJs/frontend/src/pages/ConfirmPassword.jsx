import axiosClient from "../config/axios";
import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import { useParams, Link } from "react-router-dom";

const Confirm = () => {
  const { id } = useParams();
  const [accountConfirmed, setAccountConfirmed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const url = `veterinarios/confirmar/${id}`;
        const { data } = await axiosClient(url);

        setAccountConfirmed(true);
        setAlert({
          msg: data.msg,
          error: false,
        });
      } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error: true,
        });
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <div className="text-indigo-600 font-black text-6xl">
        <h1>
          Confirma tu Cuenta y Comienza a Administrar
          <span className="text-black"> tus Pacientes</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5">
        {!loading && <Alert alert={alert} />}

        {accountConfirmed && (
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
        )}
      </div>
    </>
  );
};

export default Confirm;
