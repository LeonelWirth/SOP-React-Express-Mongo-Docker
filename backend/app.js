// Main application file
const express = require("express");
const app = express();
const port = 5000; // Choose a port for your backend

app.get("/", (req, res) => {
  res.send("Hello, this is your Express backend!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
