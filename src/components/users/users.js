Users.model = function () {

	// m.prop returns a getter-setter function

	// Initialized with default values but you might
	// also want blank values too.
	this.username = m.prop('[Your name]');
	this.lms_domain = m.prop('[Your lms domain]');
	this.db_instance = m.prop('[Your db instance]');
}


Users.controller = function() {
	var ctrl = this

	// Keep track of all entered attendees. We can
	// do this with an array:

	// Initialize with empty model so we'll see one empty
	// fieldset in the page when we implement the view.

	// We used m.prop here to follow the Uniform access 
	// principal as well as retaining the flexibility to 
	// later turn this into a computed property using
	// m.request.
	ctrl.users = m.prop([new Users.model()])
}

