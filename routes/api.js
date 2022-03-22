// Required modules
let fs = require("fs");
let router = require("express").Router();
let path = require("path");
let id = require("uniqid");

// Path to stored notes
let notesAPI = require("../db/db.json");

// What do I need to do next?

// 1. GET current notes (retrieve JSON file, parse it, display on page)
router.get("/notes", (req, res) =>
  fs.readFile("../db/db.json").then((data) => {
    return res.json(JSON.parse(data));
  })
);

// 2. POST new note to JSON file (stringify, store, reload current nodes w/ new note front-and-center)

router.post("/notes", (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newTask = {
      title,
      text,
      taskID: uuidv4(),
    };

    readAndAppend(newTask, "../db/db.json");

    const response = {
      status: "success",
      body: newTask,
    };

    res.json(response);
  } else {
    res.json("Error in posting feedback");
  }
});

// 3. Assign unique ID to each note in JSON file so you can delete specific notes

// Properly export contents of file
module.exports = router;
