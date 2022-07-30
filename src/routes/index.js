import express from 'express';
import categoriaController from '../controllers/categoriasController.js';
import filmeController from '../controllers/filmesController.js';
import healthCheck from '../controllers/healthCheck.js';
import bloqueio from '../middlewares/bloqueio.js';
import requestLog from '../middlewares/requestLog.js';

const routes = express.Router();

routes.get('/', healthCheck.health);

routes.get('/categorias', categoriaController.listarCategoria);
routes.post('/categorias', categoriaController.cadastrarCategoria);
routes.put('/categorias/:id', categoriaController.atualizaCategoria);
routes.delete('/categorias', categoriaController.deletarCategoria);

routes.get('/filmes', requestLog, bloqueio ,filmeController.listarFilme);
routes.get('/filmes/:id', filmeController.buscaFilmeID);
routes.post('/filmes', filmeController.cadastrarFilme);
routes.delete('/filmes/:id', filmeController.deletarFilme);
routes.put('/filmes/:id', filmeController.atualizaFilme);

export default routes;