var db = require("./schema.js");
//console.log("test",db);
module.exports.school = {

	addNewSchool:function (Schooldata) { 
		db.school.create(Schooldata,function(error,data){ 
			if(error) { 
				callback(error,null);
			} else {
				callback(null,data);
			}
		});
	},	
	addNewBranch:function (condition,value) {
		db.schools.update(condition,{$push:{"branch":value}},function(error,data) {
			if(error) {
				callback(error,null); 
			} else { 
			callback(null,data);
			}
		});
	},
	deleteNewBranch:function (condition,value) {
		db.schools.update(condition,{$pull:{"branch":value}},function(error,data) {
			if(error) {
				callback(error,null); 
			} else { 
			callback(null,data);
			}
		});
	},

	addNewpicture:function (condition,value) {
		db.schools.update(condition,{$push:{"photo":value}},function(error,data) {
			if(error) {
				callback(error,null); 
			} else { 
			callback(null,data);
			}
		});
	},
	deleteNewpicture:function (condition,value) {
		db.schools.update(condition,{$pull:{"photo":value}},function(error,data) {
			if(error) {
				callback(error); 
			} else { 
			callback(data);
			}
		});
	},
			
}