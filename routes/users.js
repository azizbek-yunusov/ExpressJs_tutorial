const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users name")
});

router.get("/new", (req, res) => {
  res.send("New name");
});

router.post("/", (req, res) => {
  res.send("Create User")
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get user with id ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Change with id ${req.params.id}`);
  });

// 
// router.get("/:id", (req, res) => {
//   res.send(`Get user with id ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   res.send(`Delete with id ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//   res.send(`Change with id ${req.params.id}`);
// });

module.exports = router;