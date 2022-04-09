module.exports = new (class condidatService {
    constructor() {
      this.condidat = require("../models/condidat.js");
    }
    getAll() {
      return this.condidat.find({});
    }
    create(payload) {
      return this.condidat.create(payload);
    }
    deleteAll() {
      return this.condidat.deleteAll();
    }
    update(_id, payload) {
      return this.condidat.findOneAndUpdate({ _id }, payload, {
        new: true,
        useFindAndModify: true
      });
    }
    getOne(_id) {
      return this.condidat.findOne({ _id });
    }
    deleteOne() {
      return this.condidat.findOneAndDelete({ _id }, payload, {
        useFindAndModify: true
      });
    }
  })();