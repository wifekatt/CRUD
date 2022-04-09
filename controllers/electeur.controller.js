const services = require("../services");

module.exports = {
  async getAll(req, res) {
    try {
      const electeurs = await services.electeurService.getAll();
      res.send(electeurs);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async create(req, res) {
    try {
      const electeur = await services.electeurService.create(req.body);
      res.send(electeur);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async deleteAll(req, res) {
    try {
      const electeurs = await services.electeurService.deleteAll();
      res.send(electeurs);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async update(req, res) {
    try {
      const electeur = await services.electeurService.update(
        req.params._id,
        req.body
      );
      res.send(electeur);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async getOne(req, res) {
    try {
      const electeur = await services.electeurService.getOne(req.params._id);
      res.send(electeur);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async deleteOne(req, res) {
    try {
      const electeur = await services.electeurService.deleteOne(req.params._id);
      res.send(electeur);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};