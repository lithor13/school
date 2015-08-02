var express = require("express");
var fs = require("fs");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var student = require("./public/routes/student.js");
var teacher = require("./public/routes/teacher.js");
var app =  express();

app.use(express.static(__dirname + "/database"));

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/user",function(req,res){
	res.send("nitesh");
}),
app.use('/student',student);
app.use('/teacher',teacher);

app.use("/",function(req,res){
	console.log("bhakk")
  res.send("test");
}),
app.listen(5400);
console.log("start server");