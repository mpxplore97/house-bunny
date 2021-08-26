const pg = require('pg');

const db = new pg.Client({
  user: 'marciapersaud',
  host: 'localhost',
  database: 'housebunny',
  port: 5432
});

db.connect((err) => {
  if (err) {
    console.log('error with connectionn' + err);
  } else {
    console.log('Connected');
  }
});

db.on('error', err => {
  console.log(err);
});

module.exports = db;