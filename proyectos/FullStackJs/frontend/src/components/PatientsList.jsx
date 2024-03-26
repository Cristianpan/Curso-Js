import usePatients from "../hooks/usePatients";

const PatientsList = () => {
  const { patients } = usePatients();

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
    </>
  );
};

export default PatientsList;
