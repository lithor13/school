App.StudentRoute = Ember.Route.extend({
	model: function(){
		console.log("route");
	// 	return Ember.RSVP.hash({
	// 		// categories : this.store.find('Category'),
	// });
	},

	setupController: function(controller, model){
		// the model backing the controller is users
		this._super(controller, model);
	}

});