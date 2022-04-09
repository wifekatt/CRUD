const services = require("../services");

module.exports = {
  async getAll(req, res) {
    try {
      const admins = await services.adminService.getAll();
      res.send(admins);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async create(req, res) {
    try {
      const admin = await services.adminService.create(req.body);
      res.send(admin);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async deleteAll(req, res) {
    try {
      const admins = await services.adminService.deleteAll();
      res.send(admins);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async update(req, res) {
    try {
      const admin = await services.adminService.update(
        req.params._id,
        req.body
      );
      res.send(admin);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async getOne(req, res) {
    try {
      const admin = await services.adminService.getOne(req.params._id);
      res.send(admin);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async deleteOne(req, res) {
    try {
      const admin = await services.adminService.deleteOne(req.params._id);
      res.send(admin);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};