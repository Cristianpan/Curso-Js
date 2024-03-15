import express from "express";
import getDbConexion from "./config/db.js";
import VetRoute from "./routes/VetRoutes.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});

app.use(express.json());
app.use("/api/veterinarios", VetRoute);

getDbConexion();
