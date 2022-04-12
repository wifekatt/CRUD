const mongoose = require('mongoose');

var electeur = mongoose.model('electeur', {
	ElecteurID: { type: String },
	FullName: { type: String },
	Email: { type: String }, 
	telephone: { type: String },
	CIN: { type: String }, 
	Pid: { type: String }, 
	Zip_code: { type: String },
	Bank_code: { type: String },
	language: { type: String }
});

module.exports = { electeur };
