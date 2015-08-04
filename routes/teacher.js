var express = require("express");
var router = express.Router();
var database = require("./../../database/teacher.js").teacher;

router.get("/:id",function(req,res,next) {
	var roll = {"employmentId":req.params.id};
	console.log("test get data",roll);
	database.findTeacherRecord(roll,function(error,data) {
		if(error) { 
			console.log("error");
			res.send(error);
		} else {
			res.send(data); 
		}
	})

}),
router.post("/addteacher",function(req,res,next) {
	
	console.log("the json is",req.body)
	//console.log("test");
	//var json = JSON.parse(req.body);
	//res.send("test");
	var roll = req.body;
	database.addNewTeacher(roll,function(error,data){
		if(error) { 
			console.log("error");
			res.send(error);
		} else {
			console.log(data);
			res.send(data); 
		}
	})

}),

router.delete("/deleteteacher",function(req,res,next) {
	
	//console.log("test get data",req.body.rollnumber);
	var roll = {"employmentId":req.body.employmentId};
	database.deleteTeacherRecord(roll,function(error,data){
		if(error) { 
			console.log("error");
			res.send(error);
		} else {
			res.send(data); 
		}
	})

});

router.put("/update/:employmentId",function(req,res,next) {
	var roll = {"rollnumber":req.params.employmentId};
	var record = req.body;
	console.log("rollnumber",req.params.employmentId);
	console.log(req.body);
	database.updateTeacherRecord(roll,record,function(error,data){
		if(error) { 
			console.log("error");
			res.send(error);
		} else {
			res.send(data); 
		}
	})

}),

router.put("/addsubject/:employmentId",function(req,res,next) {
	var roll = {"rollnumber":req.params.employmentId};
	var record = req.body;
	console.log("rollnumber",req.params.employmentId);
	console.log(req.body);
	database.addCourse(roll,record,function(error,data){
		if(error) { 
			console.log("error");
			res.send(error);
		} else {
			res.send(data); 
		}
	})

}),
router.put("/updatesubject/:employmentId",function(req,res,next) {
	var roll = {"rollnumber":req.params.employmentId};
	var record = req.body;
	console.log("rollnumber",req.params.employmentId);
	console.log(req.body);
	database.updateCourse(roll,record,function(error,data){
		if(error) { 
			console.log("error");
			res.send(error);
		} else {
			res.send(data); 
		}
	})

}),

module.exports = router;