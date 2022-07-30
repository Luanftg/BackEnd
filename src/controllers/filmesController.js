import Filmes from '../database/models/index.js';

const filmeController = {
    listarFilme: async (req,res) => {
        const listaDeFilmes = await Filmes.findAll();
        res.status(200).json(listaDeFilmes);
    },
    
    async cadastrarFilme (req,res) {
        const { titulo, descricao, autor } = req.body;
        const novoFilme = await Filmes.create({
            titulo,
            descricao,
            autor,
        });
        res.status(201).json(novoFilme);
    },

    async deletarFilme (req,res) {
        try {
            
            const { id } = req.params;
    
            await Filmes.destroy({
                where: {
                    id,
                },
            });
            res.status(204);
        } catch (error) {
            res.status(500).json('Ocorreu algum problema com a deleção');
        }
    },

    async atualizaFilme (req,res) {
        const {id} = req.params;
        const {titulo, descricao, autor} = req.body;

        if (!id) return res.status(400).json('id não enviado.');

        const filmeAtualizado = await Filmes.update({
            titulo,
            descricao,
            autor,
        });

        res.json(filmeAtualizado);

    },

    async buscaFilmeID (req,res) {
        const {id} = req.params;
        const retornaFilmeId  = await Filmes.findByPk(id);

        res.json(retornaFilmeId);
    }
};


export default filmeController;

