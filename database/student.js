var db = require("./schema.js");
//console.log("test",db);
module.exports.student = {

	addNewStudent: function (studentRecord,callback) {
 		db.student.create(studentRecord,function(error,data) {
 			if(error) { 
 				console.log("error on while creating new record of student",data);
 				callback(error,null);
 			} else { 
 				console.log("data return while creting new student" ,data);
 				callback(null,data);
 			}	
		});
	},
	updateStudentRecord: function (condition,record,callback) {
		db.student.update(condition,{$set:record},function(error,data){
			if(error) {
				console.log("Updating issue");
				callback(error,null);
			} else { 
				callback(null,record);	
			}
		});
	},
	findStudentRecord:function (condition,callback) {
		db.student.findOne(condition,function(error,data) {
		  	if(error) { 
		  		console.log("data not found");
		  		callback(error,null);
		  	} else { 
		  		console.log("in database ", data);
		  		callback(null,data);
		  	}
		})
	},

	deleteStudentRecord:function (condition,callback) {
		db.student.remove(condition,function(error,data) {
			if(error) {
				callback(error,null);
			} else {
				callback(null,data);
			}
		})
	},
	addMaks:function (condition,record,callback) { 
		db.student.update(condition,{$push:{"marks":{"subject":record }}},function(error,data) {
			if(error) {
				callback(error,null);
			} else {
				callback(null,data);
			}
		})
	},
	updateMarks:function (condition,record,callback) { 
		db.student.update(condition,{$set:record},function(error,data){
			if(error) {
				console.log("Updating issue");
				callback(error,null);
			} else { 
			callback(null,record);	
			}
		});
	},
}