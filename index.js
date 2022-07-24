import express from 'express';

const PORT =  process.env(PORT) || 3000;
const app = express();

app.use(json());

app.listen(3000, () => console.log(`Servidor rodando em: http://localhost:${PORT}`));