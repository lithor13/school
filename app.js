var express = require("express");
var fs = require("fs");
var student = require("./public/routes/student.js");
var app =  express();
app.use(express.static(__dirname + "/database"));


app.use("/",function(req,res){
  res.send("test");
}),
app.use("/user",function(req,res){
	res.send("nitesh");
}),
//app.use('/student',student);
app.listen(5400);
console.log("start server");