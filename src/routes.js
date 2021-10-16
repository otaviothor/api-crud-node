const express = require("express");
const routes = express.Router();

routes.post("/create", App.create);
routes.get("/message", App.find);
routes.get("/message/:id", App.findById);
routes.put("/message/:id", App.update);
routes.delete("/message/:id", App.delete);

module.exports = routes;