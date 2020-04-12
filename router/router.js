const router = require("./node_modules/express").Router();
const controller = require("../controller/controller");
const request = require("./node_modules/request");

router.get("/", controller.Homepage);
