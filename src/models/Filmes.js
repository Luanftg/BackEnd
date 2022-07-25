import { DataTypes } from 'sequelize';
import db from '../database/index.js';

const Filmes = db.define(
    "Filmes",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING,
    },
    descricao: {
        type: DataTypes.STRING,
    },
    autor: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
}, 
{
    tableName: "filme",
}
);

export default Filmes;