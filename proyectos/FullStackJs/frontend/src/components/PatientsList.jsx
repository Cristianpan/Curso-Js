import { formatDate } from "../helpers/DateFormatter";
import usePatients from "../hooks/usePatients";

const PatientsList = () => {
  const { patients, setEdit, deletePatient } = usePatients();
  return (
    <>
      {patients.length ? (
        <h2 className="font-black text-2xl text-center">
          Administra tus <span className="text-indigo-600">Pacientes</span>
        </h2>
      ) : (
        <h2 className="font-black text-2xl text-center">
          Aún no se ha registrado algún paciente
        </h2>
      )}

      {patients.map((patient) => {
        const { name, owner, email, date, symptoms, _id } = patient;
        return (
          <div
            className="m-5 bg-white shadow-md px-5 py-10 rounded-xl"
            key={_id}
          >
            <p className="font-bold text-xl leading-9">
              Nombre: <span className="font-normal">{name}</span>
            </p>
            <p className="font-bold text-xl leading-9">
              Propietario: <span className="font-normal">{owner}</span>
            </p>
            <p className="font-bold text-xl leading-9">
              Correo de contacto: <span className="font-normal">{email}</span>
            </p>
            <p className="font-bold text-xl leading-9">
              Fecha de Registro:{" "}
              <span className="font-normal">{formatDate(date)}</span>
            </p>
            <p className="font-bold text-xl leading-9">
              Síntomas: <span className="font-normal">{symptoms}</span>
            </p>

            <div className="flex justify-end gap-4 pr-5">
              <button
                type="button"
                title="editar"
                className="py-2 px-5 bg-indigo-600 rounded-md"
                onClick={() => setEdit(patient)}
              >
                <img className="w-6" src="edit.svg" alt="edit icon" />
              </button>

              <button
                type="button"
                title="eliminar"
                className="py-2 px-5 bg-red-600 rounded-md"
                onClick={() => deletePatient(patient._id)}
              >
                <img className="w-6" src="trash.svg" alt="delete icon" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PatientsList;
