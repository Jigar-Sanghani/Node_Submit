const Task = require("../models/tsk_models");

const create_Task = async (req, res) => {
  try {
    const { title, description, status, dueDate, category } = req.body;
    const userId = req.user.id;

    // if (!title || !description || !status || !dueDate || !category || !userId) {
    //   return res.json({ success: false, message: "All fields are required" });
    // }

    let newTask = await Task.create({
      title,
      description,
      status,
      dueDate,
      category,
      user: userId,
    });

    newTask = await newTask.populate("user", "username email");

    res.json({ success: true, task: newTask });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const get_AllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("user", "username email");
    res.json({ success: true, tasks });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const get_TaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate(
      "user",
      "username email"
    );
    if (!task) {
      return res.json({ success: false, message: "Task not found" });
    }
    res.json({ success: true, task });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const delete_Task = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.json({ success: false, message: "Task not found" });
    }
    res.json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = { create_Task, get_AllTasks, get_TaskById, delete_Task };
