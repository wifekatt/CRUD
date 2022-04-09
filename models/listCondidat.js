const mongoose = require('mongoose');

var listCondidat = mongoose.model('listCondidat', {
	listID: { type: String },
	listName: { type: String }

});

module.exports = { listCondidat };
