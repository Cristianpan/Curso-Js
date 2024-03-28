import express from "express";
import getDbConexion from "./config/db.js";
import VetRoute from "./routes/VetRoutes.js";
import PatientRoute from "./routes/PatientRoutes.js";
import cors from "cors";
const app = express();
getDbConexion();

app.use(express.json());

const allowedDomains = ["http://localhost:5173"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedDomains.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Action denegate by cors"));
    }
  },
};

app.use(cors(corsOptions));


//routes
app.use("/api/veterinarios", VetRoute);
app.use("/api/pacientes", PatientRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
