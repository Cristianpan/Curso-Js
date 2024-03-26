import { useEffect, useState } from "react";
import formatDateNow from "../helpers/DateFormatter";
import BasicValidator from "../validators/BasicValidator";
import Alert from "../components/Alert";
import usePatients from "../hooks/usePatients";

const Form = () => {
  const [pacient, setPacient] = useState({
    name: "",
    owner: "",
    email: "",
    date: formatDateNow(),
    symptoms: "",
  });

  const { savePatient } = usePatients();

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const { name, owner, email, date, symptoms } = pacient;

      const errorMsg = BasicValidator.hasEmptyField([
        name,
        owner,
        email,
        date,
        symptoms,
      ]);
      if (errorMsg) {
        setAlert({ msg: errorMsg, error: true });
        return;
      }
      savePatient(pacient);
      setAlert({ msg: "El paciente ha sido registrado", error: false });
      setPacient({
        name: "",
        owner: "",
        email: "",
        date: formatDateNow(),
        symptoms: "",
      });
    } catch (error) {
      setAlert({ msg: error.response.data.msg, error: true });
    }
  };

  const [alert, setAlert] = useState({
    msg: "",
    error: false,
  });

  function handleChange({ target: { value, name } }) {
    setPacient({ ...pacient, [name]: value });
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
      <form
        className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
        <p className="text-2xl font-semibold text-center mb-5">
          Añade tus Pacientes y{" "}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        {alert.msg && <Alert alert={alert} />}
        <div className="mb-5 mt-5">
          <label
            htmlFor="pet"
            className="text-gray-700 uppercase font-semibold"
          >
            Nombre Mascota
          </label>
          <input
            type="text"
            id="pet"
            placeholder="Ej: Tobby"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="name"
            value={pacient.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="text-gray-700 uppercase font-semibold"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            id="owner"
            placeholder="Ej: Luis Fernando Pérez Romero"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="owner"
            value={pacient.owner}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="text-gray-700 uppercase font-semibold"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Ej: fernandoRomero@gmail.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="email"
            value={pacient.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="text-gray-700 uppercase font-semibold"
          >
            Fecha de Registro
          </label>
          <input
            type="date"
            id="date"
            className={`${
              !pacient.date ? "text-gray-400" : ""
            } border-2 w-full p-2 mt-2rounded-md`}
            name="date"
            value={pacient.date}
            onChange={handleChange}
            min={formatDateNow()}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="text-gray-700 uppercase font-semibold"
          >
            Síntomas
          </label>

          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Ej: Calentura, dolor muscular"
            name="symptoms"
            onChange={handleChange}
            value={pacient.symptoms}
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-800 transition cursor-pointer"
          value="Registrar Paciente"
        />
      </form>
    </>
  );
};

export default Form;
