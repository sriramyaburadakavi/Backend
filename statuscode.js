const express = require("express");
const app = express();

app.use(express.json());

// Home
app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

// Create user
app.post("/user", (req, res) => {
  if (!req.body.name) {
    return res.status(400).send("Name is required");
  }
  res.status(201).send("User created");
});

// Login
app.post("/login", (req, res) => {
  if (req.body.password !== "1234") {
    return res.status(401).send("Unauthorized");
  }
  res.status(200).send("Login successful");
});

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});