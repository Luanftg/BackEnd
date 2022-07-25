"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var DB_NAME = "filmes";
var DB_USER = "root";
var DB_PASS = process.env.DB_PASS;
var DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306
};
var db = {};

try {
  db = new _sequelize.Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error('Erro ao tentar conexão com o Banco de dados!');
}

function hasConection() {
  return regeneratorRuntime.async(function hasConection$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(db.authenticate());

        case 3:
          console.log('Banco de dados conectado!');
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error('Erro ao tentar conectar ao banco de dados.');

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

Object.assign(db, {
  hasConection: hasConection
});
var _default = db;
exports["default"] = _default;