const { Pool } = require('pg');

const pool = new Pool({
  user: 'samedan78',
  host: 'dbname5.cwn3k4lw9hvz.eu-west-3.rds.amazonaws.com',
  database: 'dbname5',
  password: 'Fuckyahoo667',
  post: 5432,
  ssl: true
});

module.exports = pool;
