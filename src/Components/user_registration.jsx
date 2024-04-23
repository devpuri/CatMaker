const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 5173;  // Use environment variable or default port 3000

// Configure body-parser to handle form data
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection (replace with your database connection logic)
const MongoClient = require('mongodb').MongoClient;  // Assuming you're using MongoDB
const uri = "postgresql://admin:rwe3rC3O7w87P6D114WWQc3z@really-absolute-rhino-sin.a1.pgedge.io/defaultdb?sslmode=require";  // Replace with your connection string

// Connect to database
MongoClient.connect(uri, (err, client) => {
  if (err) {
    console.error(err);
    return;q
  }
  console.log("Connected to Database");
  const db = client.db("yourDatabaseName");

  // User registration route (POST request to '/register')
  app.post('/logIn', async (req, res) => {
    const { name, email, password } = req.body;

    // Input validation (e.g., check email format, password length)
    if (!name || !email || !password) {
      return res.status(400).send("Please fill in all required fields");
    }

    // Check for existing email (database query)
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return res.status(409).send("Email already exists");
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user object
    const newUser = { name, email, password: hashedPassword };

    // Insert user into database
    try {
      await db.collection('users').insertOne(newUser);
      res.status(201).send("User registration successful!");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  });

  app.listen(port, () => console.log(`Server listening on port ${port}`));
});
