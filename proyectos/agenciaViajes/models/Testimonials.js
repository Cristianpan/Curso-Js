import { Sequelize,  DataTypes } from "sequelize";

import db from "../config/db.js";

const Testimonials = db.define("testimoniales", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mensaje: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Testimonials;
