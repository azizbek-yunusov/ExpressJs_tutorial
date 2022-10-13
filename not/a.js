const express = require("express");

const app = express();
const path = require("path")
app.get("/", (req, res, next) => {
  // res.send("hello expressJs")
  // res.status(200).json({message: "hello ExpressJs"})
  // res.download("index.js")
  // res.render('index')
  res.sendFile(path.join(__dirname, "views", "index.html"))
});
// app.get("/about", (req, res) => {
//   res.send("About Page")
// })
app.listen(5000, () => {console.log("sever is running 5000 port ")})