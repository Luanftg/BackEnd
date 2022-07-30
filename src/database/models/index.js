import Filmes from './Filmes.js'
import Categoria from './Categorias.js'

Filmes.belongsTo(Categoria, {
    foreignKey: 'categoriaId',
});

Categoria.hasMany(Filmes, {
    foreignKey: 'categoriaId',
});

const models = {
    Categoria,
    Filmes
}

console.log(models);
console.log(Filmes);
export default {Filmes, Categoria};