const { Router } = require("express");
const {
  create_user,
  login,
  get_all_users,
} = require("../controller/user_controller");

const user_router = Router();

user_router.post("/register", create_user);
user_router.post("/login", login);
user_router.get("/all-users", get_all_users);

module.exports = user_router;
