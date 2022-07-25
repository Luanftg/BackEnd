<img src="https://img.icons8.com/external-phatplus-lineal-color-phatplus/64/000000/external-api-cloud-security-phatplus-lineal-color-phatplus.png"/>

# API - REST para StationOne-Filmes :computer:

## Tecnologias

<center>
<img src="https://img.icons8.com/fluency/48/000000/node-js.png"/>
<img src="https://img.icons8.com/ios/50/000000/mysql-logo.png"/>
</center>

## Desafio

<center>
<img src="./assets/../src/assets/back.png"/>
</center>

## Solução

- [ ] Construção do Banco de Dados MySQL
- [x] Criação da tabela filmes

```javascript
create table filmes (
    id int not null, 
    nome varchar(50), 
    autor varchar(50), 
    descricao varchar(200)

    primary key(id);
    );
```

```javascript
alter table filme 
	add createdAt date,
  add updatedAt date;
```

- [x] Utilização de fluxo de trabalho: [git flow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)
- [ ] Instalação das libs:
  - [x] [express](http://expressjs.com/pt-br/)
  - [x] [nodemon](https://nodemon.io/)
  - [x] [ORM sequelize](https://sequelize.org/)
  - [x] [mysql2](https://www.npmjs.com/package/mysql2)
- [ ] Criação dos endpoints:
  - [ ] GET - `/filmes`
  - [ ] GET - `/filmes/:id`
  - [ ] POST `/filme` 
- [x] Collections no *POSTMAN* e *Thunder Client* para testar o funcionamento das requisições e resostas de status code
- [ ] Documentação via [Swagger](https://swagger.io/)

### Projeto Finalizado

<center>

</center>

#### REFERENCIAS

<a target="_blank" href="https://icons8.com/icon/hsPbhkOH4FMe/node-js">Node Js icon by Icons8</a>
<a target="_blank" href="https://icons8.com/icon/39858/mysql-logo">MySQL Logo icon by Icons8</a>