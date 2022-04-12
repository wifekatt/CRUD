const mongoose = require('mongoose');

var electeur = mongoose.model('electeur', {
	ElecteurID: { type: String },
	FullName: { type: String }, 
	language: { type: String }, 
	CIN: { type: String }, 
	Pid: { type: String }, 
	Zip_code: { type: String },
	Bank_code: { type: String },
	Email: { type: String }, 
	telephone: { type: String }
});

module.exports = { electeur };
