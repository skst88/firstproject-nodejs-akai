const ErrorHandler = require("../utils/error-handler");

const UserServices = require("./../services/user-service");

const signup = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName, role } = req.body;
    const userData = await UserServices.signup(
      email,
      password,
      firstName,
      lastName,
      role
    );
    res.json(userData);
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userData = await UserServices.login(email, password);
    res.json(userData);
  } catch (error) {
    next(error);
  }
};

const activate = async (req, res, next) => {
  try {
    const { link } = req.params;
    await UserServices.activate(link);
    return res.redirect("https://www.google.com");
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const { status } = req.query;
    const users = await UserServices.getAll(status);
    return res.json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  login,
  activate,
  getAll,
};
