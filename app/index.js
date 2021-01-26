const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

require('dotenv').config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.database_URI;
db.books = require("./books.model.js")(mongoose);

module.exports = db;