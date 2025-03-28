const { Router } = require("express");
const user_router = require("./user_route");
const task_router = require("./task_route");

const route_index = Router();

route_index.use("/user", user_router);
route_index.use("/task", task_router);

module.exports = route_index;
