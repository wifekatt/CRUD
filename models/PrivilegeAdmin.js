const mongoose = require('mongoose');

var PrivilegeAdmin = mongoose.model('PrivilegeAdmin', {
	privilegeID: { type: Integer },
	privilegeNom: { type: String },
	read: { type: Boolean },
	write: { type: Boolean }, 
	

});

module.exports = { PrivilegeAdmin };
