var db = require("./schema.js");
//console.log("test",db);
modeule.export.teacher {

	function addNewTeacher (studentRecord) {
 		db.teacher.create(studentRecord,function(error,data) {
 			if(error) { 
 				console.log("error on while creating new record of student",data);
 				callback(error);
 			} else { 
 				console.log("data return while creting new student" , data);
 				callback(data);
 			}	
		});
	},
	function updateTeacherRecord(condition,record) {
		db.teacher.update(condition,{$set:record},function(error,data){
			if(error) {
				console.log("Updating issue");
				callback(error);
			} else { 
			callback(record);	
			}
		});
	},
	function findTeacherRecord(condition) {
		db.teacher.findOne(condition,function(error,data) {
		  	if(error) { 
		  		console.log("data not found");
		  		callback(error);
		  	} else { 
		  		callback(data);
		  	}
		})
	},

	function deleteTeacherRecord(condition) {
		db.teacher.remove(condition,function(error,data) {
			if(error) {
				callback(error);
			} else {
				callback(data);
			}
		})
	},
	function addCourse(condition,record) { 
		db.teacher.update(condition,record,function(error,data) {
			if(error) {
				callback(error);
			} else {
				callback(data);
			}
		})
	},
	function updateCourse(condition,record) { 
		db.student.update(condition,{$set:record},function(error,data){
			if(error) {
				console.log("Updating issue");
				callback(error);
			} else { 
			callback(record);	
			}
		});
	},
},