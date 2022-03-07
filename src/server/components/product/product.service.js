const products = [
  {
    id: 1,
    date: 'hier',
  },
  {
    id: 2,
    date: 'today',
  },
];

const { Pool } = require('pg');
const { config } = require('../../database');

const find = async () => {
  const pool = new Pool(config);

  try {
    const { rows } = await pool.query('SELECT * FROM "product"');
    pool.end();
    return rows;
  } catch (err) {
    console.log(err.stack);
  }
};

const findById = (id) => {
  const product = products.find((product) => product.id === id);
  return product;
};

module.exports = { products, find, findById };
