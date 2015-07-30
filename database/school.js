var db = require("./schema.js");
//console.log("test",db);
modeule.export.school {

	function addNewSchool(Schooldata) { 
		db.school.create(Schooldata,function(error,data){ 
			if(error) { 
				callback(error);
			} else {
				callback(data);
			}
		});
	},	
	function addNewBranch(condition,value) {
		db.schools.update(condition,{$push:{"branch":value}},function(error,data) {
			if(error) {
				callback(error); 
			} else { 
			callback(data);
			}
		});
	},
	function deleteNewBranch(condition,value) {
		db.schools.update(condition,{$pull:{"branch":value}},function(error,data) {
			if(error) {
				callback(error); 
			} else { 
			callback(data);
			}
		});
	},

	function addNewpicture(condition,value) {
		db.schools.update(condition,{$push:{"photo":value}},function(error,data) {
			if(error) {
				callback(error); 
			} else { 
			callback(data);
			}
		});
	},
	function deleteNewpicture(condition,value) {
		db.schools.update(condition,{$pull:{"photo":value}},function(error,data) {
			if(error) {
				callback(error); 
			} else { 
			callback(data);
			}
		});
	},
			
}