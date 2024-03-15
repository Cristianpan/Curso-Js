import express from "express";
import VetController from "../Controllers/VetController.js";
const router = express.Router();

router.post("/", VetController.create);
router.get("/perfil", VetController.profile);
router.get("/confirmar/:token", VetController.confirm);

export default router;
