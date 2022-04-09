module.exports = new (class PrivilegeAdminService {
    constructor() {
      this.PrivilegeAdmin = require("../models/PrivilegeAdmin.js");
    }
    getAll() {
      return this.PrivilegeAdmin.find({});
    }
    create(payload) {
      return this.PrivilegeAdmin.create(payload);
    }
    deleteAll() {
      return this.PrivilegeAdmin.deleteAll();
    }
    update(_id, payload) {
      return this.PrivilegeAdmin.findOneAndUpdate({ _id }, payload, {
        new: true,
        useFindAndModify: true
      });
    }
    getOne(_id) {
      return this.PrivilegeAdmin.findOne({ _id });
    }
    deleteOne() {
      return this.PrivilegeAdmin.findOneAndDelete({ _id }, payload, {
        useFindAndModify: true
      });
    }
  })();