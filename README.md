<img src="https://img.icons8.com/external-phatplus-lineal-color-phatplus/64/000000/external-api-cloud-security-phatplus-lineal-color-phatplus.png"/>

# API - REST para StationOne-Filmes

## Tecnologias
<img src="https://img.icons8.com/fluency/48/000000/node-js.png"/>
<img src="https://img.icons8.com/ios/50/000000/mysql-logo.png"/>

## Desafio

<center>
<img src="./assets/back.png"/>
</center>

## Solução

- [ ] Construção do Banco de Dados MySQL
- [ ] Criação da tabela filmes

```javascript
create table filmes (
    id int not null, 
    nome varchar(50), 
    autor varchar(50), 
    descricao varchar(200)

    primary key(id);
    );
```

- [ ] Utilização de fluxo de trabalho: [git flow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)
- [ ] Instalação das libs:
  - [ ] [express](http://expressjs.com/pt-br/)
  - [ ] [nodemon](https://nodemon.io/)
  - [ ] [ORM sequelize](https://sequelize.org/)
- [ ] Collections no *POSTMAN* e *Thunder Client* para testar o funcionamento das requisições e resostas de status code
- [ ] Documentação via [Swagger](https://swagger.io/)

### Projeto Finalizado

#### REFERENCIAS

<a target="_blank" href="https://icons8.com/icon/hsPbhkOH4FMe/node-js">Node Js icon by Icons8</a>
<a target="_blank" href="https://icons8.com/icon/39858/mysql-logo">MySQL Logo icon by Icons8</a>