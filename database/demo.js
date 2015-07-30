//example for creating a student schema 
var db = require("./schema.js");
// db.student.create({"name":"testing","rollnumber":"12345","password":"testing"},function(error,data) {
//  			if(error) { 
//  				console.log("error on while creating new record of student",data);
//  				//callback(error);
//  			} else { 
//  				//callback("data return while creting new student" , data);
//  				console.log(data);
//  			}	
// 		});

// db.student.update({"name":"testing"},{$push:{"marks":{"subject":{"class1":2,name:"math","number":12,"garde":"A"}}}},function(error,data) {
//   			if(error) { 
//   				console.log("error on while creating new record of student",data);
// //  				//callback(error);
//  			} else { 
//  				//callback("data return while creting new student" , data);
//  				console.log(data);
//  				}
//  			});
// //

/*updating a data base
db.school.create({"name":"DAV","branch":"patna","rank":1},function(error,data){ 
			if(error) { 
			} else {
				//callback(data);
				console.log(data);
			}
		});

		db.schools.update({"name":"DAV"},{$push:{branch:"Arrah"}});
		 db.schools.update({"name":"DAV"},{$pull:{"branch":"patna"}});

		*/
/* for adding the image in mongodb database we can use Gridfs,
  Gridfs use to divide the image into a small chunk and chunk size is 255kb.
  and create the new documnet for every chunk 
 but there is one cons  is use more RAM for Procssing
  */		