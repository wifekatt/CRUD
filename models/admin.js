const mongoose = require('mongoose');

var admin = mongoose.model('admin', {
	adminID: { type: String },
	adminNom: { type: String },
	adminPrenom: { type: String },
	adminPassword: { type: String }, 
	privilegeID: { type: Number }

});

module.exports = { admin };
