const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydb',
  password: 'Fuckyahoo667',
  post: 5432
});

module.exports = pool;
