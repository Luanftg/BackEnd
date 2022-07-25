"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Filmes = _interopRequireDefault(require("../models/Filmes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var produtoController = {
  listarFilme: function listarFilme(req, res) {
    var listaDeFilmes;
    return regeneratorRuntime.async(function listarFilme$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_Filmes["default"].findAll());

          case 2:
            listaDeFilmes = _context.sent;
            res.json(listaDeFilmes);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  cadastrarFilme: function cadastrarFilme(req, res) {
    var _req$body, titulo, descricao, autor, novoFilme;

    return regeneratorRuntime.async(function cadastrarFilme$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, titulo = _req$body.titulo, descricao = _req$body.descricao, autor = _req$body.autor;
            _context2.next = 3;
            return regeneratorRuntime.awrap(_Filmes["default"].create({
              titulo: titulo,
              descricao: descricao,
              autor: autor
            }));

          case 3:
            novoFilme = _context2.sent;
            res.json(novoFilme);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  deletarFilme: function deletarFilme(req, res) {
    var id;
    return regeneratorRuntime.async(function deletarFilme$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return regeneratorRuntime.awrap(_Filmes["default"].destroy({
              where: {
                id: id
              }
            }));

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  atualizaFilme: function atualizaFilme(req, res) {
    var id, _req$body2, titulo, descricao, autor, filmeAtualizado;

    return regeneratorRuntime.async(function atualizaFilme$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, titulo = _req$body2.titulo, descricao = _req$body2.descricao, autor = _req$body2.autor;
            _context4.next = 4;
            return regeneratorRuntime.awrap(_Filmes["default"].update({
              titulo: titulo,
              descricao: descricao,
              autor: autor
            }));

          case 4:
            filmeAtualizado = _context4.sent;

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    });
  }
};
var _default = produtoController;
exports["default"] = _default;