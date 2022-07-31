import Categoria from '../database/models/Categorias.js';

const categoriaController = {
    listarCategoria: async (req,res) => {
        const listaDeCategorias = await Categoria.findAll();
        res.status(200).json(listaDeCategorias);
    },
    
    async cadastrarCategoria (req,res) {
        const { nome } = req.body;
        const novoCategoria = await Categoria.create({
            nome
        });
        res.status(201).json(novoCategoria);
    },

    async deletarCategoria (req,res) {
        try {
            
            const { id } = req.params;
    
            await Categoria.destroy({
                where: {
                    id,
                },
            });
            res.status(204).json('categoria excluida com sucesso');
        } catch (error) {
            res.status(500).json('Ocorreu algum problema com a deleção');
        }
    },

    async atualizaCategoria (req,res) {
        const {id} = req.params;
        const {nome} = req.body;

        if (!id) return res.status(400).json('id não enviado.');

        const CategoriaAtualizado = await Categoria.update({nome},{where:{id}});

        res.status(200).json(CategoriaAtualizado);

    },

    async buscaCategoriaID (req,res) {
        const {id} = req.params;
        
        const retornaCategoriaId  = await Categoria.findByPk(id);
        
        if (retornaCategoriaId === null) return res.status(404).json('categoria não encontrada.');

        res.status(200).json(retornaCategoriaId);
    }
};


export default categoriaController;

