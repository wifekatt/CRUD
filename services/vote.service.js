module.exports = new (class voteService {
    constructor() {
      this.vote = require("../models/vote.js");
    }
    getAll() {
      return this.vote.find({});
    }
    create(payload) {
      return this.vote.create(payload);
    }
    deleteAll() {
      return this.vote.deleteAll();
    }
    update(_id, payload) {
      return this.vote.findOneAndUpdate({ _id }, payload, {
        new: true,
        useFindAndModify: true
      });
    }
    getOne(_id) {
      return this.vote.findOne({ _id });
    }
    deleteOne() {
      return this.vote.findOneAndDelete({ _id }, payload, {
        useFindAndModify: true
      });
    }
  })();