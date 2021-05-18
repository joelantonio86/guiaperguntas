const Sequelize = require('sequelize');
const connection = new Sequelize('guiaperguntas', 'root', 'qwer0987', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;