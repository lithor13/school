var db = require("./schema.js");
//console.log("test",db);
modeule.export.student {

	function addNewStudent (studentRecord) {
 		db.student.create(studentRecord,function(error,data) {
 			if(error) { 
 				console.log("error on while creating new record of student",data);
 				callback(error);
 			} else { 
 				console.log("data return while creting new student" , data);
 				callback(data);
 			}	
		});
	},
	function updateStudentRecord(condition,record) {
		db.student.update(condition,{$set:record},function(error,data){
			if(error) {
				console.log("Updating issue");
				callback(error);
			} else { 
			callback(record);	
			}
		});
	},
	function findStudentRecord(condition) {
		db.student.findOne(condition,function(error,data) {
		  	if(error) { 
		  		console.log("data not found");
		  		callback(error);
		  	} else { 
		  		callback(data);
		  	}
		})
	},

	function deleteStudentRecord(condition) {
		db.student.remove(condition,function(error,data) {
			if(error) {
				callback(error);
			} else {
				callback(data);
			}
		})
	},
	function addMaks(condition,record) { 
		db.student.update(condition,{$push:record},function(error,data) {
			if(error) {
				callback(error);
			} else {
				callback(data);
			}
		})
	},
	function updateMarks(condition,record) { 
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