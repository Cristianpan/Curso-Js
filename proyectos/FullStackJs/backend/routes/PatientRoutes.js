import express from "express";
import PatientController from "../Controllers/PatientController.js";
import checkAuth from "../middleware/AuthMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(checkAuth, PatientController.createPatient)
  .get(checkAuth, PatientController.getAllPatients);

router
  .route("/:id")
  .get(checkAuth, PatientController.getPatient)
  .put(checkAuth, PatientController.updatePatient)
  .delete(checkAuth, PatientController.deletePatient);

export default router;
