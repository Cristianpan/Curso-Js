import { useEffect, useState } from "react";
import ProfileNav from "../components/ProfileNav";
import useAuth from "../hooks/useAuth";
import Alert from "../components/Alert";
import BasicValidator from "../validators/BasicValidator";

const AdminProfile = () => {
  const { auth, updateProfile } = useAuth();
  const [alert, setAlert] = useState({});
  const [profile, setProfile] = useState({
    name: "",
    web: "",
    tel: "",
    email: "",
  });

  const handleInputChange = ({ target: { value, name } }) => {
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const errorMsg = BasicValidator.hasEmptyField([
        profile.name,
        profile.email,
      ]);

      if (errorMsg) {
        setAlert({ msg: "El email y el nombre son obligatorios", error: true });
        return;
      }
      const msg = await updateProfile(profile);
      setAlert({ msg });
    } catch (error) {
      setAlert({ msg: error.response.data.msg, error: true });
    }
  };

  useEffect(() => {
    auth.tel = auth.tel || "";
    auth.web = auth.web || "";
    setProfile(auth);
  }, [auth]);

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

      <h2 className="font-black text-3xl text-center mt-10">Editar Perfil</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu{" "}
        <span className="text-indigo-600 font-semibold">Perfil aquí</span>
      </p>

      <form
        className="w-11/12 md:w-2/3 mx-auto bg-white shadow rounded-lg p-5"
        onSubmit={handleSubmit}
      >
        {alert.msg && <Alert alert={alert} />}
        <div className="my-3">
          <label htmlFor="name" className="uppercase font-bold text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
            value={profile.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-3">
          <label htmlFor="web" className="uppercase font-bold text-gray-700">
            Sitio Web
          </label>
          <input
            type="text"
            id="web"
            name="web"
            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
            value={profile.web}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-3">
          <label htmlFor="tel" className="uppercase font-bold text-gray-700">
            Teléfono
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
            value={profile.tel}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-3">
          <label htmlFor="email" className="uppercase font-bold text-gray-700">
            Correo
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
            value={profile.email}
            onChange={handleInputChange}
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

export default AdminProfile;
