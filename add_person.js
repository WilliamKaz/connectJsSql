const firstName = process.argv[2];
const lastName = process.argv[3];
const birthDate = process.argv[4];

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
  .insert({ first_name: firstName, last_name: lastName, birthdate: birthDate})
  .then(rows =>{ knex.destroy()});