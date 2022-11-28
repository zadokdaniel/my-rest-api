const users = require("./routes/users");
const auth = require("./routes/auth");
const cards = require("./routes/cards");
const cors = require("cors");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");

const mongoConnectionString =
  process.env.MONGO_CONNECTION_STRING || "mongodb://localhost/my_rest_api";

mongoose
  .connect(mongoConnectionString)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(require("morgan")("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/cards", cards);

const port = process.env.PORT || 3900;
http.listen(port, () => console.log(`Listening on port ${port}...`));
