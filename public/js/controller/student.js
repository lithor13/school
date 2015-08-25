App.StudentController = Ember.Controller.extend({
  // initial value
  isExpanded: false,
  actions: {
    studentLogin: function() {
      console.log(this.get("rollnumber"));
      console.log(this.get("password"));
      alert("testing done");
      var data = {"rollnumber":this.get("rollnumber"),"password" :this.get("password")};
      $.ajax({
      url: 'student/rollnumber/' + encodeURIComponent(JSON.stringify(data)),
     	type: "GET",
	  contentType: 'application/json',
	  success: function (data) {
	  	console.log(data);
	 },
	 error: function() {
               console.log('DEBUG: GET Enquiries Failed');
           }
	});
    },
}
});