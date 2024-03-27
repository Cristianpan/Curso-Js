import { useEffect, useState } from "react";
import { formatDateToInput } from "../helpers/DateFormatter";
import BasicValidator from "../validators/BasicValidator";
import Alert from "../components/Alert";
import usePatients from "../hooks/usePatients";

const Form = () => {
  const [patient, setPatient] = useState({
    name: "",
    owner: "",
    email: "",
    date: "",
    symptoms: "",
  });

  const { savePatient, patient: patientToEdit, updatePatient } = usePatients();

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const { name, owner, email, date, symptoms } = patient;

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
      if (patient._id) {
        updatePatient(patient); 
        setAlert({ msg: "El paciente ha sido actualizado", error: false });
      } else {
        savePatient(patient);
        setAlert({ msg: "El paciente ha sido registrado", error: false });
      }
      setPatient({
        name: "",
        owner: "",
        email: "",
        date: formatDateToInput(),
        symptoms: "",
      });
    } catch (error) {
      setAlert({ msg: error.response.data.msg, error: true });
    }
  };

  useEffect(() => {
    if (patientToEdit._id) {
      patientToEdit.date = formatDateToInput(patientToEdit.date);
      setPatient(patientToEdit);
    }
  }, [patientToEdit]);

  const [alert, setAlert] = useState({
    msg: "",
    error: false,
  });

  function handleChange({ target: { value, name } }) {
    setPatient({ ...patient, [name]: value });
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
            value={patient.name}
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
            value={patient.owner}
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
            value={patient.email}
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
              !patient.date ? "text-gray-400" : ""
            } border-2 w-full p-2 mt-2rounded-md`}
            name="date"
            value={patient.date}
            onChange={handleChange}
            min={patient.date ? patient.date : formatDateToInput()}
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
            value={patient.symptoms}
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-800 transition cursor-pointer"
          value={patient._id ? 'Guardar Cambios' : 'Registrar Paciente'}
        />
      </form>
    </>
  );
};

export default Form;
