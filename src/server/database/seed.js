const { Pool } = require('pg');
const format = require('pg-format');

const database = 'nodejs-shop';
const config = {
  user: 'postgres',
  host: 'postgres',
  password: 'postgres',
  database,
  port: 5432,
};

const images = [
  'https://api.lorem.space/image?w=400&h=400&hash=8B7BCDC2',
  'https://api.lorem.space/image?w=400&h=400&hash=500B67FB',
  'https://api.lorem.space/image?w=400&h=400&hash=A89D0DE6',
  'https://api.lorem.space/image?w=400&h=400&hash=225E6693',
  'https://api.lorem.space/image?w=400&h=400&hash=9D9539E7',
  'https://api.lorem.space/image?w=400&h=400&hash=BDC01094',
  'https://api.lorem.space/image?w=400&h=400&hash=7F5AE56A',
  'https://api.lorem.space/image?w=400&h=400&hash=4F32C4CF',
  'https://api.lorem.space/image?w=400&h=400&hash=B0E33EF4',
  'https://api.lorem.space/image?w=400&h=400&hash=2D297A22',
];

async function seed() {
  const values = images.map((image, index) => {
    const price = parseFloat(
      `${Math.floor(Math.random() * 50) + 1}.${
        Math.floor(Math.random() * 99) + 1
      }`
    );

    return [`Product ${index + 1}`, image, price];
  });

  const pool = new Pool(config);
  await pool.query(
    format('INSERT INTO product (label, image, price) VALUES %L', values)
  );

  pool.end();
}

module.exports = { seed };
