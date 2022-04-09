module.exports = new (class electeurService {
    constructor() {
      this.user = require("../models/electeur.js");
    }
    getAll() {
      return this.electeur.find({});
    }
    create(payload) {
      return this.electeur.create(payload);
    }
    deleteAll() {
      return this.electeur.deleteAll();
    }
    update(_id, payload) {
      return this.electeur.findOneAndUpdate({ _id }, payload, {
        new: true,
        useFindAndModify: true
      });
    }
    getOne(_id) {
      return this.electeur.findOne({ _id });
    }
    deleteOne() {
      return this.electeur.findOneAndDelete({ _id }, payload, {
        useFindAndModify: true
      });
    }
  })();