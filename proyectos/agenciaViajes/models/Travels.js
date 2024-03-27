import { Sequelize, DataTypes} from "sequelize";

import db from "../config/db.js";

const Travels = db.define("viajes", {
  id: {
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true, 
  }, 
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  fecha_ida: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fecha_vuelta: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  disponibles: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Travels; 
