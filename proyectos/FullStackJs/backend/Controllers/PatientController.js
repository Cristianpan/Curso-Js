import Patient from "../models/Patient.js";

class PatientController {
  async createPatient(req, res) {
    try {
      const { body: patientData } = req;
      const newPatient = new Patient(patientData);
      newPatient.vetId = req.vet._id;
      const patientSaved = await newPatient.save();

      res.json(patientSaved);
    } catch (error) {
      console.log(error);
    }
  }

  async getAllPatients(req, res) {
    const patients = await Patient.find({ vetId: req.vet._id });

    res.json(patients);
  }

  async getPatient(req, res) {
    const { id } = req.params;
    const patient = await Patient.findById(id);

    if (patient.vetId.toString() !== req.vet._id.toString()) {
      return res.json({
        msg: "Usted no cuenta con permisos para realizar esta acción",
      });
    }

    res.json(patient);
  }

  async updatePatient(req, res) {
    try {
      const { id } = req.params;
      let patient = await Patient.findById(id);

      if (patient.vetId.toString() !== req.vet._id.toString()) {
        return res.json({
          msg: "Usted no cuenta con permisos para realizar esta acción",
        });
      }

      if (!patient) {
        return res.json({
          msg: "No se ha encontrado al paciente",
        });
      }

      const {name, owner, symptoms, email} = req.body;  

      patient.name = name || patient.name;
      patient.owner = owner || patient.owner;
      patient.symptoms = symptoms || patient.symptoms;
      patient.email = email || patient.email;

      const patientUpdated = patient.save();

      res.json(patientUpdated);
    } catch (error) {
      console.log(error);
    }
  }

  async deletePatient(req, res) {
    try {
      const { id } = req.params;
      const patient = await Patient.findById(id);

      if (patient.vetId.toString() !== req.vet._id.toString()) {
        return res.json({
          msg: "Usted no cuenta con permisos para realizar esta acción",
        });
      }

      if (!patient) {
        return res.json({
          msg: "No se ha encontrado al paciente",
        });
      }
      patient.delete();
      res.json({ msg: "El paciente ha sido eliminado correctamente" });
    } catch (error) {
        console.log(error); 
    }
  }
}

export default new PatientController();
