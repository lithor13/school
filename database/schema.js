
var mongoose = require("mongoose");

//connect to database
mongoose.connect('mongodb://localhost/school');
var Schema = mongoose.Schema;
//create schema for student 

var Student = new Schema({
	name:String,
	rollnumber:String,
	password:String,
	Address:String,
	PhoneNumber:String,
	fathername:String,
	email:String,
	photo:String,
	marks:[{
		subject : {
			class1:Number,
			name:String,
			number:Number,
			grade:String,
		},
	}],
	issuebook:[{
		subjectname:String,
		author:String,
		issuedate:String,
		lastdate:String,
		file:String,
	}],
   yearofjoin:String,
   status:String
},{collection:"students"});
module.exports.student = mongoose.model('student',Student);

//create schema for teacher

var Teacher = new Schema({
	name:String,
	employmentId:String,
	password:String,
	Address:String,
	PhoneNumber:String,
	fatherName:String,
	email:String,
	photo:String,
	course:[{
		subject:{
			class1:Number,
			name:String,
			number:Number,
			grade:String,
		}
	}],
	issuebook:[{
		subjectname:String,
		lastdate:String
	}],
	profile:String,
},{collection:"teachers"});
module.exports.teachers = mongoose.model('teachers',Teacher);

//create schema for School 

var School = new Schema({
	name:String,
	branch:{type:Array},
	rank:Number,
	medium:String,
	photo:{type:Array}
},{collection:"schools"});
module.exports.school = mongoose.model('schools',School);

//create schema for library 

var Library = new Schema({
	name:String,
	Address:String,
	PhoneNumber:String,
	email:String,
	Subects:[{
			bookname:String,
			writer:String,
	}],
	photo:{type:Array},
},{collection:"library"});
module.exports.library = mongoose.model('library',Library);

console.log("create module......");