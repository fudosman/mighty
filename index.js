const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

// App middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/ping', (req, res) => {
  res.status(200).send("Alive...");
});

// whatsapp api
app.use("/api/v1/whatsapp", require("./routes/index"));

// Not found route - 404
app.use("**", (req, res) => {
  res.status(404).send({ message: "Route not found" });
});

// Error middleware
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send({ 
    message: "Something went wrong", 
    error: error.message 
  });
});

app.listen(port, async () => {
  console.log(`:::> listening on http://localhost:${port}`);
});