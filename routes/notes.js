// Required modules
let fs = require("fs");
let router = require("express").Router();
let path = require("path");
let id = require("uniqid");

// Path to stored notes
let notes = require("../db/db.json");

// What do I need to do next?

// 1. GET current notes (retrieve JSON file, parse it, display on page)

// 2. POST new note to JSON file (stringify, store, reload current nodes w/ new note front-and-center)

// 3. Assign unique ID to each note in JSON file so you can delete specific notes

// Properly export contents of file
module.exports = router;
