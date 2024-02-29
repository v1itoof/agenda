const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const { loginRequired } = require('./src/middlewares/middleware');

// Rotas da Home
route.get('/', homeController.index);

// Rotas de Login - GET
route.get('/login/index', loginController.index);
route.get('/login/logout', loginController.logout);
// Rotas de Login - POST
route.post('/login/register', loginController.register);
route.post('/login/autenticacao', loginController.autenticacao);

// Rotas de Contato - GET
route.get('/contato/index', loginRequired, contatoController.index);
route.get('/contato/index/:id', loginRequired, contatoController.editIndex);
route.get('/contato/delete/:id', loginRequired, contatoController.delete);
// Rotas de Contato - POST
route.post('/contato/register', contatoController.register);
route.post('/contato/edit/:id', contatoController.edit);

module.exports = route;