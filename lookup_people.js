  const pg = require("pg");
  const settings = require("./settings"); // settings.json
  const args = process.argv[2];

  const client = new pg.Client({
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  });



  client.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }
    console.log('Searching...');
    client.query("SELECT * from famous_people where first_name=$1" , [ args ], (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      for (var i = 0; i < result.rows.length; i++) {
        console.log(`-${i}: ${result.rows[i].first_name} ${result.rows[i].last_name}, born '${result.rows[i].birthdate.getFullYear()}-${result.rows[i].birthdate.getMonth()}-${result.rows[i].birthdate.getDate()}'  `); //output: 1
      }
      client.end();
    });
  });


//   client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }
//   client.query("SELECT * from famous_people where first_name=$1" , [ args ], (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     console.log(result.rows[0].number); //output: 1
//     client.end();
//   });
// });
