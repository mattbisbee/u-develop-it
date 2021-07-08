const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'Biznaz0814!',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

//test route to see if the server was functioning properly
// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello World'
//   });
// });

module.exports = db;