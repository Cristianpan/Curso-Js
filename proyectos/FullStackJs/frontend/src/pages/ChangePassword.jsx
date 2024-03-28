import ProfileNav from "../components/ProfileNav";
import Alert from "../components/Alert";
import { useState, useEffect } from "react";
import BasicValidator from "../validators/BasicValidator";
import UserValidator from "../validators/UserValidator";
import useAuth from "../hooks/useAuth";

const ChangePassword = () => {
  const [alert, setAlert] = useState({});
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const { savePassword } = useAuth();

  const handleInputChange = ({ target: { value, name } }) => {
    setPassword({ ...password, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      let errorMsg =
        BasicValidator.hasEmptyField([
          password.currentPassword,
          password.confirmPassword,
          password.newPassword,
        ]) ||
        UserValidator.verifyPassword(
          password.newPassword,
          password.confirmPassword
        );

      if (errorMsg) {
        setAlert({ msg: errorMsg, error: true });
        return;
      }

      const msg = await savePassword(password);
      console.log(msg);
      setAlert({ msg });
    } catch (error) {
      setAlert({ msg: error.response.data.msg, error: true });
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
      <ProfileNav />

      <h2 className="font-black text-3xl text-center mt-10">
        Cambiar Contraseña
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu{" "}
        <span className="text-indigo-600 font-semibold">Contraseña aquí</span>
      </p>

      <form
        className="w-11/12 md:w-2/3 mx-auto bg-white shadow rounded-lg p-5"
        onSubmit={handleSubmit}
      >
        {alert.msg && <Alert alert={alert} />}

        <div className="my-5">
          <label className="uppercase text-gray-600 block text-xl font-bold">
            Contraseña Actual
          </label>
          <input
            className="border w-full p-3 mt-3 bg-gray-50 rounded"
            type="password"
            placeholder="Tu contraseña"
            name="currentPassword"
            value={password.currentPassword}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-5">
          <label className="uppercase text-gray-600 block text-xl font-bold">
            Nueva Contraseña
          </label>
          <input
            className="border w-full p-3 mt-3 bg-gray-50 rounded"
            type="password"
            placeholder="Tu nueva contraseña"
            value={password.newPassword}
            onChange={handleInputChange}
            name="newPassword"
          />
        </div>
        <div className="my-5">
          <label className="uppercase text-gray-600 block text-xl font-bold">
            Confirma tu Nueva Contraseña
          </label>
          <input
            className="border w-full p-3 mt-3 bg-gray-50 rounded"
            type="password"
            placeholder="Confirma tu nueva contraseña"
            value={password.confirmPassword}
            onChange={handleInputChange}
            name="confirmPassword"
          />
        </div>

        <input
          type="submit"
          value="Guardar Cambios"
          className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5"
        />
      </form>
    </>
  );
};

export default ChangePassword;
