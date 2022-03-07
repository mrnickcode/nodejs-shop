const { Pool, Client } = require('pg');
const { seed } = require('./seed');

const database = 'nodejs-shop';
const config = {
  user: 'postgres',
  host: 'postgres',
  password: 'postgres',
  database,
  port: 5432,
};

async function initDb() {
  const client = new Client({ ...config, database: undefined });
  await client.connect();

  try {
    await client.query(`CREATE DATABASE "${database}";`);
    await createTables();
    await seed();
    client.end();

  } catch (err) {
    console.error('initDb error caught');
  }

}

async function createTables() {
  const pool = new Pool(config);

  await pool.query(
    `CREATE TABLE "user" (
      id uuid DEFAULT gen_random_uuid() PRIMARY KEY, 
      email varchar(100) NOT NULL
    )`
  );

  await pool.query(
    `CREATE TABLE "order" (
      id uuid DEFAULT gen_random_uuid() PRIMARY KEY, 
      user_id uuid,
      status varchar(10) NOT NULL, 
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES "user" (id)
    )`
  );

  await pool.query(
    `CREATE TABLE "product" (
      id uuid DEFAULT gen_random_uuid() PRIMARY KEY, 
      label varchar(100) NOT NULL, 
      image varchar(200) NOT NULL,
      price numeric(12,2) NOT NULL
    )`
  );

  pool.end();
}

module.exports = { config, database, initDb };
