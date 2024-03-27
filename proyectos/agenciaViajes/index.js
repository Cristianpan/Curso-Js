import express from "express";
import expressFlash from "express-flash";
import session from "express-session";
import router from "./routes/index.js";
import db from "./config/db.js";
import { configDotenv } from "dotenv";
configDotenv();

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});

app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));

app.use(expressFlash());

// Conectar la base de datos
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));

//Habilitar PUG
app.set("view engine", "pug");

app.use(express.urlencoded({extended: true}))

//Definir archivos estáticos
app.use(express.static("public"));

// Obtener el año actual
app.use((req, res, next) => {
  res.locals.year = new Date().getFullYear();
  res.locals.siteName = "Agencia de Viajes";


  return next();
});

//Agregar router
app.use("/", router);
