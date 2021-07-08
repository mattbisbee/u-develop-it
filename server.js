const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});
