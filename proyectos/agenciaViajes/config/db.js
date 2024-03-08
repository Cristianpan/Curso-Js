import { Sequelize } from "sequelize";

const db = new Sequelize("agenciaviajes", "root", "", {
    host: 'localhost', 
    port: '3306', 
    dialect: 'mysql', 
    define: {
        timestamps: false, 
    },
    pool: {
        max: 5, 
        min: 0, 
        acquire: 3000, 
        idle: 10000
    }, 
    operatorsAliases: 0
});

(async () => {
    await db.sync({ force: false });
})();

export default db; 
