// Required modules
const { json } = require("express/lib/response");
let fs = require("fs");
let router = require("express").Router();
let id = require("uniqid");

// 1. GET current notes (retrieve JSON file, parse it, display on page)
router.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) throw err;

    return res.json(JSON.parse(data));
  });
});

// 2. POST new note to JSON file (stringify, store, reload current nodes w/ new note front-and-center)

router.post("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) throw err;
    let oldData = JSON.parse(data);

    const { title, text } = req.body;

    let newTip = {
      title: title,
      text: text,
      id: id(),
    };

    oldData.unshift(newTip);

    let newData = JSON.stringify(oldData);

    fs.writeFile("./db/db.json", newData, (err) => {
      if (err) throw err;

      console.log("Tip successfully posted!");
    });

    res.end();
  });
});

router.delete("/notes/:id", (req, res) => {
  let toDelete = req.params.id;

  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;

    let oldData = JSON.parse(data);

    for (i = 0; i < oldData.length; i++) {
      if (oldData[i].id == toDelete) {
        oldData.splice(i, 1);

        let newData = JSON.stringify(oldData);

        console.log(newData);
        fs.writeFile("./db/db.json", newData, (err) => {
          if (err) throw err;

          console.log("Deleted successfully!");
        });
      }
    }
  });

  res.end();
});

// 3. Assign unique ID to each note in JSON file so you can delete specific notes

// Properly export contents of file
module.exports = router;
