const { find, findById } = require('./order.service');
const express = require('express');

const api = () => {
  const app = express.Router();
  app.use('/orders', app);

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
