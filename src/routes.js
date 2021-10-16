const express = require("express");
const routes = express.Router();

const Message = require("./controllers/MessageController");

routes.post("/create", Message.create);
routes.get("/message", Message.find);
routes.get("/message/:id", Message.findById);
routes.put("/message/:id", Message.update);
routes.delete("/message/:id", Message.delete);

module.exports = routes;
