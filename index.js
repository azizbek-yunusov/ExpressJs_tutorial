const express = require("express");

const app = express();
// const path  = require("path");
const userRouter = require('./routes/users')

app.use(express.static("public"));


app.set("view engine", "ejs");
// app.use(middleLogger)

// app.get("/", (req, res) => {
//   res.render("index", {title: "express"});
// })
// MiddleWare
// app.use("/users", userRouter)
// function middleLogger(req, res, next) {
//   console.log(req.originalUrl);
//   next();
// }
app.listen("5000", () => console.log("Server is Running..."))
