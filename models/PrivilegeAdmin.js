const mongoose = require('mongoose');

var PrivilegeAdmin = mongoose.model('PrivilegeAdmin', {
	privilegeID: { type: Number },
	privilegeName: { type: String },
	read: { type: Boolean },
	write: { type: Boolean }, 
	

});

module.exports = { PrivilegeAdmin };
