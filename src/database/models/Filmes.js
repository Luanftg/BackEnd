import { DataTypes } from 'sequelize';
import db from '../index.js';
import Categoria from './Categorias.js';

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
    categoriaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Categoria,
            key: "categoriaId",
        },
    },
}, 
{
    tableName: "filme",
}
);

export default Filmes;