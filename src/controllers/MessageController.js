const Message = require("../models/Message");

module.exports = {
  async create(req, res) {
    const message = new Message({
      message: req.body.message,
    });

    message
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Message.",
        });
      });
  },

  async find(_, res) {
    Message.find()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving messages.",
        });
      });
  },

  async findById(req, res) {
    const { id } = req.params;
    Message.findById(id)
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: `Message not found with id ${id}`,
          });
        }

        res.send(data);
      })
      .catch((err) => {
        let status = 500;
        let message = `Error retrieving message with id ${id}`;

        if (err.kind === "ObjectId") {
          status = 404;
          message = `Message not found with id ${id}`;
        }

        return res.status(status).send({
          message,
        });
      });
  },

  async update(req, res) {
    const { id } = req.params;
    const { message } = req.body;

    Message.findByIdAndUpdate(
      id,
      {
        message,
      },
      { new: true }
    )
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: `Message not found with id ${id}`,
          });
        }

        res.send(data);
      })
      .catch((err) => {
        let status = 500;
        let message = `Error updating message with id ${id}`;

        if (err.kind === "ObjectId") {
          status = 404;
          message = `Message not found with id ${id}`;
        }

        return res.status(status).send({
          message,
        });
      });
  },

  async delete(req, res) {
    const { id } = req.params;

    Message.findByIdAndRemove(id)
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "Message not found with id " + id,
          });
        }

        res.send({ message: "Message deleted successfully!" });
      })
      .catch((err) => {
        let status = 500;
        let message = `Could not delete message with id ${id}`;

        if (err.kind === "ObjectId" || err.name === "NotFound") {
          status = 404;
          message = `Message not found with id ${id}`;
        }

        return res.status(status).send({
          message,
        });
      });
  },
};
