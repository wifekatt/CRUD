const mongoose = require('mongoose');

var condidat = mongoose.model('condidat', {
	condidatID: { type: String },
	condidatName: { type: String }

});

module.exports = { condidat };
