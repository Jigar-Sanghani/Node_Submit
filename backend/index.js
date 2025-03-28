const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const route_index = require("./router/index_route");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", route_index);

const PORT = process.env.PORT || 4454;

app.listen(PORT, () => {
  console.log("listening on port PORT", PORT);
  db();
});
