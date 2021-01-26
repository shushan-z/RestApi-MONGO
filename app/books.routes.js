module.exports = app => {

    const books = require("./books.controller.js");

    var router = require("express").Router();

    router.post("/", books.create);

    router.get("/", books.findAll);

    router.get("/published", books.findAllPublished);

    router.get("/:id", books.findOne);

    router.put("/:id", books.update);

    router.delete("/:id", books.delete);

    router.delete("/", books.deleteAll);

    app.use('/api/books', router);
  };