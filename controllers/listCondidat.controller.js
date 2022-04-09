const services = require("../services");

module.exports = {
  async getAll(req, res) {
    try {
      const listCondidats = await services.listCondidatService.getAll();
      res.send(listCondidats);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async create(req, res) {
    try {
      const listCondidat = await services.listCondidatService.create(req.body);
      res.send(listCondidat);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async deleteAll(req, res) {
    try {
      const listCondidats = await services.listCondidatService.deleteAll();
      res.send(listCondidats);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async update(req, res) {
    try {
      const listCondidat = await services.listCondidatService.update(
        req.params._id,
        req.body
      );
      res.send(listCondidat);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async getOne(req, res) {
    try {
      const listCondidat = await services.listCondidatService.getOne(req.params._id);
      res.send(listCondidat);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async deleteOne(req, res) {
    try {
      const listCondidat = await services.listCondidatService.deleteOne(req.params._id);
      res.send(listCondidat);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};