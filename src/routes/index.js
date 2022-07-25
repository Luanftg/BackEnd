import express from 'express';
import filmeController from '../controllers/filmesController.js';
import healthCheck from '../controllers/healthCheck.js';
const routes = express.Router();

routes.get('/', healthCheck.health);

routes.get('/filmes', filmeController.listarFilme);
routes.get('/filmes/:id', filmeController.buscaFilmeID);
routes.post('/filmes', filmeController.cadastrarFilme);
routes.delete('/filmes/:id', filmeController.deletarFilme);
routes.put('/filmes/:id', filmeController.atualizaFilme);

export default routes;