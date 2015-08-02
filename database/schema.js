var mongoose = require("mongoose");

//connect to database
mongoose.connect('mongodb://localhost/school');
var Schema = mongoose.Schema;
//create schema for student 

var Student = new Schema({
    name: String,
    rollnumber: Number,
    password: String,
    address: String,
    phoneNumber: String,
    fathername: String,
    email: String,
    picture: String,
    marks: [{
        _id: false,
        standard: Number,
        number: Number,
        grade: String,
        subject: String
    }],
    issuebook: [{
        subjectname: String,
        author: String,
        issuedate: String,
        lastdate: String,
        file: String,
    }],
    yearofjoin: String,
    status: String
}, {
    collection: "students"
});
module.exports.student = mongoose.model('student', Student);

var marks = new Schema({
        _id: false,
        student:String
        standard: Number,
        number: Number,
        grade: String,
        subject: String
},{
	collection:"marks"
});
module.exports.marks = mongoose.model('marks',marks);
//create schema for teacher

var Teacher = new Schema({
    name: String,
    employmentId: Number,
    password: String,
    Address: String,
    PhoneNumber: String,
    fatherName: String,
    email: String,
    photo: String,
    course: [{
            standard: Number,
            subject: String,
        }],
    issuebook: [{
        subjectname: String,
        lastdate: String
    }],
    profile: String,
}, {
    collection: "teachers"
});
module.exports.teachers = mongoose.model('teachers', Teacher);

//create schema for School 

var School = new Schema({
    name: String,
    branch: {
        type: Array
    },
    rank: Number,
    medium: String,
    photo: {
        type: Array
    }
}, {
    collection: "schools"
});
module.exports.school = mongoose.model('schools', School);

//create schema for library 

var Library = new Schema({
    name: String,
    Address: String,
    PhoneNumber: String,
    email: String,
    Subects: [{
        bookname: String,
        writer: String,
    }],
    photo: {
        type: Array
    },
}, {
    collection: "library"
});
module.exports.library = mongoose.model('library', Library);

console.log("create module......");
