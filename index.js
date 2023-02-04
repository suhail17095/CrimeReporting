const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { forEach } = require("lodash");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.get("/",(req,res)=>
{
  res.render("index");
})


app.get("/registeration",(req,res)=>
{
  res.render("registeration");
})








app.set('view engine', 'ejs');
app.use(express.static("public"));


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
