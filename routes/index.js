const { Router } = require("express");
const router = Router();
const { getUsers, createUsers } = require("../controllers");

router.get("/users/:id", getUsers);
router.post("/users", createUsers);

router.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports = router;
