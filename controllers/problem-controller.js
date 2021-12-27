const { CREATE_SUCCESS } = require("../utils/const");

const ProblemServices = require("./../services/problem-service");

const create = async (req, res, next) => {
  try {
    const { title, description, tag } = req.body;
    const { id } = req.user;
    const { images } = req.files;
    await ProblemServices.create(title, description, id, tag, images);
    res.json({ message: CREATE_SUCCESS });
  } catch (error) {
    next(error);
  }
};
const getAll = async (req, res, next) => {
  try {
    let { q, page, limit, tag } = req.query;
    page = page || 1;
    limit = limit || 5;

    const offset = page * limit - limit;
    const problems = await ProblemServices.getAll({ offset, q, limit, tag });
    res.json(problems);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
};
