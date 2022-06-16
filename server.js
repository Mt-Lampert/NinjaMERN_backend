require("dotenv").config();
// import {express} from "express"
const express = require("express");
const workouts = require('./routes/workouts')

const { appendFile } = require("fs");
const { clearScreenDown } = require("readline");
const { CLIENT_RENEG_LIMIT } = require("tls");

// eine Express-Instanz aufbauen
const app = express();

// Server einstellen und konfigurieren


// Log-Middleware 
app.use((req, res, next) => {
  console.log(`Route: '${req.path}'; Method: ${req.method}`);
  next();
})

app.use('/api/workouts', workouts);


app.get('/', (req, res) => {
  res.json({
    "message": "Es laeuft!"
  })
})



// Server starten!
app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}. Hello Folks!`)
}) 