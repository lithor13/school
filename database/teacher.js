var db = require("./schema.js");
//console.log("test",db);
module.exports.teacher = {

	addNewTeacher:function(studentRecord,callback) {
		console.log(studentRecord);
 		db.teachers.create(studentRecord,function(error,data) {
 			if(error) { 
 				console.log("error on while creating new record of teacher",data);
 				callback(error,null);
 			} else { 
 				console.log("data return while creting new student" , data);
 				callback(null,data);
 			}	
		});
	},
	updateTeacherRecord:function (condition,record,callback) {
		db.teachers.update(condition,{$set:record},function(error,data){
			if(error) {
				console.log("Updating issue");
				callback(error,null);
			} else { 
			callback(null,record);	
			}
		});
	},
	findTeacherRecord:function (condition,callback) {
		db.teachers.findOne(condition,function(error,data) {
		  	if(error) { 
		  		console.log("data not found");
		  		callback(error,null);
		  	} else { 
		  		callback(null,data);
		  	}
		})
	},

	deleteTeacherRecord:function (condition,callback) {
		db.teachers.remove(condition,function(error,data) {
			if(error) {
				callback(error,null);
			} else {
				callback(null,data);
			}
		})
	},
	addCourse:function (condition,record,callback) { 
		db.teachers.update(condition,{$push:{"course":record}},function(error,data) {
			if(error) {
				callback(error,null);
			} else {
				callback(null,data);
			}
		})
	},
	updateCourse:function (condition,record,callback) { 
		db.students.update(condition,{$set:record},function(error,data){
			if(error) {
				console.log("Updating issue");
				callback(error,null);
			} else { 
			callback(null,record);	
			}
		});
	},
}