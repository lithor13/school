var express = require("express");
var path =  require("path");
var fs = require("fs");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var student = require("./routes/student.js");
var teacher = require("./routes/teacher.js");
var app =  express();

app.use(express.static(__dirname + "/database"));
app.use(express.static(path.join(__dirname, 'public')));

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
	res.sendfile('public/index.htm');;
  //res.send("test");
}),
app.listen(5401);
console.log("start server");