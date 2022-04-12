const mongoose = require('mongoose');

var admin = mongoose.model('admin', {
	adminID: { type: String },
	adminName: { type: String },
	adminPassword: { type: String }, 
	privilegeID: { type: Number }

});

module.exports = { admin };
