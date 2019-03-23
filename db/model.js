const { Model } = require('objection');
const Knex = require('knex');
const config = require('../knexfile.js').development;

const knex = Knex(config);
Model.knex(knex);

module.exports = Model;
