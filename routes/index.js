const router = require("express").Router();

const userRoutes = require("./user-routes");
const problemlRoutes = require("./problem-routes");

router.use("/user", userRoutes);
router.use("/problem", problemlRoutes);

module.exports = router;
