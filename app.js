const express = require("express");
const {
  signUp,
  login,
  findUserById,
  findByUsername,
} = require("./controller/user.controller");
const {
  sendMessage,
  getAllMessage,
  deleteMessage,
} = require("./controller/message.controller");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const dbConnection = require("./server");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const whitelist = ['*']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

app.use(cors());

app.post("/users/signup", signUp);
app.post("/users/login", login);
app.get("/users/:id", findUserById);
app.get("/users/:username", findByUsername);
app.post("/message", sendMessage);
app.get("/message", getAllMessage);
app.delete("/message/:id", deleteMessage);

dbConnection();

const port = 2000;
app.listen(port, () => {
  console.log("app is ready");
});
