const mongoose = require('mongoose');

var electeur = mongoose.model('electeur', {
	ElecteurID: { type: String },
	nom: { type: String }, 
	prenom: { type: String }, 
	langage: { type: String }, 
	Cin: { type: String }, 
	Pid: { type: String }, 
	Zip_code: { type: String },
	Bank_code: { type: String },
	Email: { type: String }, 
	telephone: { type: String }
});

module.exports = { electeur };
