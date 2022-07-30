import { DataTypes } from 'sequelize';
import db from '../index.js';

const Categoria = db.define(
    "Categoria",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
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
    tableName: "categoria",
}
);

export default Categoria;