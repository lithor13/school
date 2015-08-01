var express = require("express");
var router = express.Router();
var database = require("./../../database/student.js").student;

router.get("/rollnumber/:rollnum",function(req,res,next) {
	var roll = {"rollnumber":req.params.rollnum};
	console.log("test get data",roll);
	database.findStudentRecord(roll,function(error,data){
		if(error) { 
			console.log("error");
			res.send(error);
		} else {
			res.send(data); 
		}
	})

}),
router.post("/rollnumber",function(req,res,next){
	
	console.log("the json is",req.body)
	//console.log("test");
	//var json = JSON.parse(req.body);
	res.send("test");
	var roll = req.body;
	database.addNewStudent(roll,function(error,data){
		if(error) { 
			console.log("error");
			res.send(error);
		} else {
			console.log(data);
			res.send(data); 
		}
	})

});

router.delete("/rollnumber",function(req,res,next) {
	
	//console.log("test get data",req.body.rollnumber);
	var roll = {"rollnumber":req.body.rollnumber};
	database.deleteStudentRecord(roll,function(error,data){
		if(error) { 
			console.log("error");
			res.send(error);
		} else {
			res.send(data); 
		}
	})

});

router.put("/update/:rollnum",function(req,res,next) {
	var roll = {"rollnumber":req.params.rollnum};
	var record = req.body;
	console.log("rollnumber",req.params.rollnum);
	console.log(req.body);
	database.updateStudentRecord(roll,record,function(error,data){
		if(error) { 
			console.log("error");
			res.send(error);
		} else {
			res.send(data); 
		}
	})

}),

router.put("/addmarks/:rollnum",function(req,res,next) {
	var roll = {"rollnumber":req.params.rollnum};
	var record = req.body;
	console.log("rollnumber",req.params.rollnum);
	console.log(req.body);
	database.addMaks(roll,record,function(error,data){
		if(error) { 
			console.log("error");
			res.send(error);
		} else {
			res.send(data); 
		}
	})

}),
router.put("/updatemarks/:rollnum",function(req,res,next) {
	var roll = {"rollnumber":req.params.rollnum};
	var record = req.body;
	console.log("rollnumber",req.params.rollnum);
	console.log(req.body);
	database.updateMarks(roll,record,function(error,data){
		if(error) { 
			console.log("error");
			res.send(error);
		} else {
			res.send(data); 
		}
	})

}),

module.exports = router;