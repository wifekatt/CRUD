const mongoose = require('mongoose');

var vote = mongoose.model('vote', {
	VoteID: { type: String },
	VoteName: { type: String }, 
	MaxNumChoices: { type: Number },
	BeginDate: { type: Date },
	ExpiryDate: { type: Date }

});

module.exports = { vote };
