const produtoController = {
    listarFilme: (req,res) => {
        res.json([{nome: "Filme1"},{nome: "Filme2"}]);
    }
};

export default produtoController;

