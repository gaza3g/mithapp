Users.model = function () {

	// m.prop returns a getter-setter function

	// Initialized with default values but you might
	// also want blank values too.
	this.username = m.prop('[Your name]');
	this.lms_domain = m.prop('[Your lms domain]');
	this.db_instance = m.prop('[Your db instance]');
}