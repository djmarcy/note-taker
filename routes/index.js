let express = require("express");

let index = require("./index");
let notes = require("./notes");

let app = express();

app.get("/notes", (req, res) =>
  res.sendFile(path.join(_dirname, "public/notes.html"))
);

app.get("/", (req, res) =>
  res.sendFile(path.join(_dirname, "public/index.html"))
);
