import express from "express";
import getDbConexion from "./config/db.js";
import VetRoute from "./routes/VetRoutes.js";
import PatientRoute from "./routes/PatientRoutes.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});

app.use(express.json());

//routes
app.use("/api/veterinarios", VetRoute);
app.use("/api/pacientes", PatientRoute);


getDbConexion();
