const services = require("../services");

module.exports = {
  async getAll(req, res) {
    try {
      const votes = await services.voteService.getAll();
      res.send(votes);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async create(req, res) {
    try {
      const vote = await services.voteService.create(req.body);
      res.send(vote);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async deleteAll(req, res) {
    try {
      const votes = await services.voteService.deleteAll();
      res.send(votes);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async update(req, res) {
    try {
      const vote = await services.voteService.update(
        req.params._id,
        req.body
      );
      res.send(vote);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async getOne(req, res) {
    try {
      const vote = await services.voteService.getOne(req.params._id);
      res.send(vote);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async deleteOne(req, res) {
    try {
      const vote = await services.voteService.deleteOne(req.params._id);
      res.send(vote);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};