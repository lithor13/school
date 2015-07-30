var express = require("express");
var router = express.Router();

router.get("/rollnumber",function(req,res,next){
console.log("testing done");
res.send("testing done");
});
module.exports = router;