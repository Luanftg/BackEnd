import express from "express";

const routes = express.Router();

routes.get('/', (req,res)=> {
    res.send("Olá Mundo!");
});

routes.post("/cadastrar", (req,res)=>{
    console.log(req.body);
    res.json(req.body);
})

export default routes;