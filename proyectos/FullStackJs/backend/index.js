import express from "express"; 
import getDbConexion from "./config/db.js";
const app = express();
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});

app.use("/", (req, res) => {
    res.send('Hola mundo'); 
});

getDbConexion(); 