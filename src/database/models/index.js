import Filmes from './Filmes.js'
import Categoria from './Categorias.js'

Filmes.belongsTo(Categoria, {
    foreignKey: 'categoriaId',
});

Categoria.hasMany(Filmes, {
    foreignKey: 'categoriaId',
});

export default Filmes;