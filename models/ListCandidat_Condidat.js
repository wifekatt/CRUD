const mongoose = require('mongoose');

var listCondidat_condidat = mongoose.model('listCondidat_condidat', {
	listID: { type: String },
	condidatID: { type: String }

});

module.exports = { listCondidat_condidat };
