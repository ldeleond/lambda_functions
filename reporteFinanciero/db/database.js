const { Pool } = require("pg");

const DBconfig = {
  database: 'testing',
  user: 'postgres',
  password: 'ddrd54gd65%GF&0',
  host: 'testing.cluster-cit8kpi1lbs3.us-east-1.rds.amazonaws.com'
} 

const pool = new Pool(DBconfig);

module.exports = pool;