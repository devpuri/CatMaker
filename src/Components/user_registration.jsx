const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql = require('mysql')

const app = express();
const port = process.env.PORT || 5173;  // Use environment variable or default port 3000

// Configure body-parser to handle form data
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection (replace with your database connection logic)
// MySQL connection pool details (replace with your own)
const pool = mysql.createPool({
  host: 'sql6.freesqldatabase.com',
  user: 'sql6701174',
  password: 'HWcUJ2Aiei',
  database: 'sql6701174'
});

// Log successful database connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Successfully connected to database!");
    connection.release();
  }
});

  // User registration route (POST request to '/register')
  app.post('/logIn', async (req, res) => {
    const { name, email, password } = req.body;

    // Input validation (e.g., check email format, password length)
    if (!name || !email || !password) {
      return res.status(400).send("Please fill in all required fields");
    }

    // Check for existing email (database query)
    // Check for existing email (database query)
    const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUser.length > 0) {
    return res.status(409).send("Email already exists");}

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user object
    const newUser = { name, email, password: hashedPassword };

    // Insert user into database
    try {
      const [result] = await pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [newUser.name, newUser.email, newUser.password]);
      res.status(201).send("User registration successful!");
    } catch (error) {
      console.error("Error inserting user:", error);
      res.status(500).send("Internal server error");
    }
  });

  app.listen(port, () => console.log(`Server listening on port ${port}`));
