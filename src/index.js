import express, { json } from 'express';
import routes from './routes/index.js';
import db from './database/index.js';

const PORT =  process.env.PORT || 3000;
const app = express();

db.hasConection();

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log(`Servidor rodando em: http://localhost:${PORT}`));