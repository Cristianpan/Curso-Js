import express from "express";
import VetController from "../Controllers/VetController.js";
import checkAuth from "../middleware/AuthMiddleware.js";
const router = express.Router();

router.post("/", VetController.create);
router.get("/confirmar/:token", VetController.confirm);
router.post("/login", VetController.auth);
router.post("/olvide-password", VetController.forgetPassword);
router.get("/olvide-password/:token", VetController.checkToken);
router.post("/olvide-password/:token", VetController.resetPassword);

//area privada
router.get("/perfil", checkAuth, VetController.profile);
router.put("/perfil/:id", checkAuth, VetController.updateProfile);

export default router;
