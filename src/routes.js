const express = require("express");
const router = express.Router();

router.post("/create", App.create);
router.get("/message", App.find);
router.get("/message/:id", App.findById);
router.put("/message/:id", App.update);
router.delete("/message/:id", App.delete);

module.exports = router;