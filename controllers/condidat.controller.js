const services = require("../services");

module.exports = {
  async getAll(req, res) {
    try {
      const condidats = await services.condidatService.getAll();
      res.send(condidats);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async create(req, res) {
    try {
      const condidat = await services.condidatService.create(req.body);
      res.send(condidat);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async deleteAll(req, res) {
    try {
      const condidats = await services.condidatService.deleteAll();
      res.send(condidats);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async update(req, res) {
    try {
      const condidat = await services.condidatService.update(
        req.params._id,
        req.body
      );
      res.send(condidat);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async getOne(req, res) {
    try {
      const condidat = await services.condidatService.getOne(req.params._id);
      res.send(condidat);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async deleteOne(req, res) {
    try {
      const condidat = await services.condidatService.deleteOne(req.params._id);
      res.send(condidat);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};