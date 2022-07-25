import express from 'express';
import filmeController from '../controllers/filmesController.js';
import healthCheck from '../controllers/healthCheck.js';
const routes = express.Router();

routes.get('/', healthCheck.health);
routes.get('/filmes', filmeController.listarFilme);
routes.get('/filme/:id', (req,res)=> {
    console.log(req.params);
    res.send("Olá Mundo!");
});

routes.post("/filme", (req,res)=>{
    console.log(req.body);
    res.json('Filme Cadastrado!');
})

export default routes;