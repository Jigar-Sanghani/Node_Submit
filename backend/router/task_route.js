const { Router } = require("express");
const { authMiddleware } = require("../middlewares/auth");

const { create_Task, get_AllTasks, get_TaskById, delete_Task } = require("../controller/task_controller");

const task_router = Router();

task_router.post("/create", authMiddleware, create_Task);
task_router.get("/all-task", get_AllTasks);
task_router.get("/task/:id", get_TaskById);
task_router.delete("/delete/:id", delete_Task);

module.exports = task_router;
