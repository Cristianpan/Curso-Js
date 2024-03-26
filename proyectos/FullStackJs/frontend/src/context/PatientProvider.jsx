import { createContext, useEffect, useState } from "react";
import axiosClient from "../config/axios";
import getAuthorizatioConfig from "../helpers/HeaderAuthorization";

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({
    name: "",
    owner: "",
    email: "",
    date: "",
    symptoms: "",
  });

  const setEdit = (patient) => {
    setPatient(patient);
  };

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
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const savePatient = async (patient) => {
    try {
      const authConfig = getAuthorizatioConfig();

      const { data } = await axiosClient.post(
        "/pacientes",
        patient,
        authConfig
      );

      const { createdAt, updatedAt, __vm, ...patientSaved } = data;
      setPatients([patientSaved, ...patients]);
    } catch (error) {
      throw error;
    }
  };

  const updatePatient = async (patient) => {
    try {
      const { data } = await axiosClient.put(
        `/pacientes/${patient._id}`,
        patient,
        getAuthorizatioConfig()
      );

      const { createdAt, updatedAt, __vm, ...patientSaved } = data;
      setPatients(
        patients.map((patient) => {
          if (patient._id === patientSaved._id) {
            return patientSaved;
          }

          return patient;
        })
      );
    } catch (error) {
      throw error;
    }
  };

  const deletePatient = async (patientId) => {
    try {
      const isConfirm = confirm("¿Está seguro de realizar esta acción?");
      
      if (isConfirm) {
        await axiosClient.delete(
          `/pacientes/${patientId}`,
          getAuthorizatioConfig()
        );

        setPatients(patients.filter((patient) => patient._id !== patientId));
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <PatientContext.Provider
      value={{
        patients,
        savePatient,
        updatePatient,
        deletePatient,
        setEdit,
        patient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export default PatientContext;
