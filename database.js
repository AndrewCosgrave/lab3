const pgPromise = require('pg-promise');

const connStr = 'postgres://postgres:andy123@localhost/dellstore2'; 

const pgp = pgPromise({}); 
const psql = pgp(connStr); 

exports.psql = psql;
