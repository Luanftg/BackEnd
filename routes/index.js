import express from "express";

const routes = express.Router();

routes.get('/', (req,res)=> {
    res.send("Olá Mundo!");
});

routes.post("/cadastrar", (req,res)=>{
    res.send('Cadastrei um filme!');
})

export default routes;