import Categorias from '../database/models/index.js';

const categoriaController = {
    listarCategoria: async (req,res) => {
        const listaDeCategorias = await Categorias.findAll();
        res.status(200).json(listaDeCategorias);
    },
    
    async cadastrarCategoria (req,res) {
        const { nome } = req.body;
        const novoCategoria = await Categorias.create({
            nome
        });
        res.status(201).json(novoCategoria);
    },

    async deletarCategoria (req,res) {
        try {
            
            const { id } = req.params;
    
            await Categorias.destroy({
                where: {
                    id,
                },
            });
            res.status(204);
        } catch (error) {
            res.status(500).json('Ocorreu algum problema com a deleção');
        }
    },

    async atualizaCategoria (req,res) {
        const {id} = req.params;
        const {nome} = req.body;

        if (!id) return res.status(400).json('id não enviado.');

        const CategoriaAtualizado = await Categorias.update({
            nome
        });

        res.json(CategoriaAtualizado);

    },

    async buscaCategoriaID (req,res) {
        const {id} = req.params;
        const retornaCategoriaId  = await Categorias.findByPk(id);

        res.json(retornaCategoriaId);
    }
};


export default categoriaController;

