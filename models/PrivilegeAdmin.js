const mongoose = require('mongoose');

var PrivilegeAdmin = mongoose.model('PrivilegeAdmin', {
	privilegeID: { type: Number },
	privilegeNom: { type: String },
	read: { type: Boolean },
	write: { type: Boolean }, 
	

});

module.exports = { PrivilegeAdmin };
