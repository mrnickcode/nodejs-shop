const { Pool, Client } = require('pg');

const database = 'nodejs-shop';
const config = {
  user: 'postgres',
  host: 'postgres',
  password: 'postgres',
  port: 5432,
};

async function init() {
  const client = new Client(config);

  await client.connect();
  try {
    await client.query(`CREATE DATABASE "${database}";`);
    await createTables();
  } catch (err) {
    console.error(err);
  }

  client.end();
}

async function createTables() {
  const pool = new Pool({ ...config, database });

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
  
  pool.end();
}

init();

// pgtools.createdb(config, 'some_db', function (err, res) {
//   if (err) {
//     console.log('Initialize "nodejs-shop" database');
//   } else {
//     console.log('created', res);

//     pgtools.dropdb(config, 'some_db', function (err, res) {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log('dropped', res);
//       }
//     });
//   }
// });
