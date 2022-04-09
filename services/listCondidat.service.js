module.exports = new (class listCondidatService {
    constructor() {
      this.listCondidat = require("../models/listCondidat.js");
    }
    getAll() {
      return this.listCondidat.find({});
    }
    create(payload) {
      return this.listCondidat.create(payload);
    }
    deleteAll() {
      return this.listCondidat.deleteAll();
    }
    update(_id, payload) {
      return this.listCondidat.findOneAndUpdate({ _id }, payload, {
        new: true,
        useFindAndModify: true
      });
    }
    getOne(_id) {
      return this.listCondidat.findOne({ _id });
    }
    deleteOne() {
      return this.listCondidat.findOneAndDelete({ _id }, payload, {
        useFindAndModify: true
      });
    }
  })();