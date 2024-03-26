import { createContext, useEffect, useState } from "react";
import axiosClient from "../config/axios";
import getAuthorizatioConfig from "../helpers/HeaderAuthorization";

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const { data } = await axiosClient(
          "/pacientes",
          getAuthorizatioConfig()
        );

        setPatients(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const savePatient = async (patient) => {
    try {
      const { data } = await axiosClient.post(
        "/pacientes",
        patient,
        getAuthorizatioConfig()
      );

      const { createdAt, updatedAt, __vm, ...patientSaved } = data;

      setPatients([patientSaved, ...patients]);
    } catch (error) {}
  };

  return (
    <PatientContext.Provider
      value={{
        patients,
        savePatient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export default PatientContext;
