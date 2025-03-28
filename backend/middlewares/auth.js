const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  try {

    const token =req.headers.authorization?.split(" ")[1];


    if (!token) {
      return res
        .status(401)
        .send({ message: "Access Denied: No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    req.user = decoded;

    next();
  } catch (error) {
    return res
      .status(401)
      .send({ message: "Invalid Token, Authentication Failed" });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).send({ message: "Access Denied: Admins Only" });
  }
  next();
};

module.exports = { authMiddleware, isAdmin };
