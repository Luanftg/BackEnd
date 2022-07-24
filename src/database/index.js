import { Sequelize } from 'sequelize';

const DB_NAME = "filmes";
const DB_USER = "root";
const DB_PASS = "";
const DB_CONFIG = {
    dialect: "mysql",
    gost: "localhost",
    port: 3306,
};
let db = {},

    try {
        db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
    } catch (error) {
        console.error('Erro ao tentar conexão com o Banco de dados!')
    }
export default db;