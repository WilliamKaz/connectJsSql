const args = process.argv[2];
var knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'development',
    password : 'development',
    database : 'test_db'
  }
});



knex('famous_people')
  .where({ first_name: `${args}` })
  .then(rows => {
    console.log(rows);
    knex.destroy();
});