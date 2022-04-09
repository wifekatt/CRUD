module.exports = new (class adminService {
    constructor() {
      this.admin = require("../models/admin.js");
    }
    getAll() {
      return this.admin.find({});
    }
    create(payload) {
      return this.admin.create(payload);
    }
    deleteAll() {
      return this.admin.deleteAll();
    }
    update(_id, payload) {
      return this.admin.findOneAndUpdate({ _id }, payload, {
        new: true,
        useFindAndModify: true
      });
    }
    getOne(_id) {
      return this.admin.findOne({ _id });
    }
    deleteOne() {
      return this.admin.findOneAndDelete({ _id }, payload, {
        useFindAndModify: true
      });
    }
  })();