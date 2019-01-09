const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

let app = express();

//  bodyParser MiddleWare 
app.use(bodyParser.json());

//   db config
const db = require("./config/keys").mongoURI;

//   connect to mongoose
console.log(db)

mongoose.connect(db)
  .then(() =>
    console.log("Database connected...").catch(err => console.log(err))
  );
 
  const port =3000;

  app.listen(port , ()=> console.log(`Server running on ${port}`))