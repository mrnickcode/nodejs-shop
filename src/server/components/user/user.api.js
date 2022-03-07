const { find, findById } = require('./user.service');
const express = require('express');

const api = () => {
  const app = express.Router();
  app.use('/users', app);

  app.get('/', async (req, res) => {
    return res.json(await find());
  });

  app.get('/:id', async (req, res) => {
    const { id } = req.params;
    return res.json(await findById(Number(id)));
  });

  return app;
};

module.exports = api;
