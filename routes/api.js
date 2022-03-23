// Required modules
const { json } = require("express/lib/response");
let fs = require("fs");
let router = require("express").Router();
let path = require("path");
let id = require("uniqid");

// 1. GET current notes (retrieve JSON file, parse it, display on page)
router.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", 'utf-8', (err, data) => {

    if (err) throw err

    return res.json(JSON.parse(data))
  })}
);

// 2. POST new note to JSON file (stringify, store, reload current nodes w/ new note front-and-center)

router.post("/notes", (req, res) => {

  let oldData = require('../db/db.json')

  const { title, text } = req.body

  let newTip = {
    title: title,
    text: text,
    id: id()
  }

  oldData.unshift(newTip)

  console.log(oldData)

  let newData = JSON.stringify(oldData)

  console.log(newData)

  // Take db.json
  fs.writeFile("./db/db.json", newData, (err) => {
    if (err) throw err

    console.log("Tip successfully posted!")
    router.get("/notes", (req, res) => {
      fs.readFile("./db/db.json", 'utf-8', (err, data) => {
    
        if (err) throw err
    
        return res.json(JSON.parse(data))
      })}
    );
  })

  res.end();
});

router.delete("/notes/:id", (res, req) => {

  let oldData = require('../db/db.json');

  let toDelete = oldData

  console.log(toDelete)

})


// 3. Assign unique ID to each note in JSON file so you can delete specific notes

// Properly export contents of file
module.exports = router;
