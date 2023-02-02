const express = require("express");
const router = express.Router();
const todo = require("../model/todo");
const user = require("../model/users");
router.use(express.json());
const { validateToken } = require("../middleware/AuthMiddleware");
const bodyparser = require("body-parser");
// router.use(bodyparser.json());

router.get("/username", validateToken, async (req, res) => {
  const data = await user.findOne({ _id: req.user });
  res.json(data);
});

router.get("/all", validateToken, async (req, res) => {
  try {
    const { page } = req.query;

    const data = await todo
      .find({ userid: req.user })
      .skip((page - 1) * 10)
      .limit(10);
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.get("/alldata", validateToken, async (req, res) => {
  try {
    const data = await todo.find({ userid: req.user })
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/add", validateToken, async (req, res) => {
  try {
    let input = Array.isArray(req.body);

    if (input) {
      let lists = req.body;
      lists.map(async (user) => {
        const data = await todo.create({
            Activity: user.Activity,
            userid: req.user,
        });
      });
      res.json({ message: "success" });
    } else {
      const data = await todo.create({
        Activity: req.body.Activity,
        userid: req.user,
      });
      res.json({ message: "success" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;
