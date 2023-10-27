require('dotenv').config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const {default: mongoose} = require("mongoose");

//Imports
const routes = require('./routes/routes');

//Config
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Routes
app.use("/", routes);

//Mongoose Config
mongoose.connect("mongodb://127.0.0.1:27017/todolist",{useNewUrlParser:true, useUnifiedTopology:true})


app.listen(process.env.PORT, () => {console.log('Servidor rodando')})