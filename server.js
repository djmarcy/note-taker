let express = require("express");
let index = require("./routes/index");
let notesAPI = require("./routes/api");
let path = require("path");
let fs = require("fs");

let PORT = process.env.PORT || 3001;

let app = express();

//Middleware in use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Direct traffic
app.use("/", index);
app.use("/notes", notesAPI);

// Inter
// app.get("/notes", (req, res) => {
//   // For each of the 3 routes, I'll need to load separately each time; function to handle?
//   // For DELETE, read notes, filter by specified note, delete specified note, save others back to db.json file
//   // Assign each note a unqiue ID key
//   const notes = JSON.parse(fs.readFileSync("db/db.json"));

//   res.json(notes);
// });

app.listen(PORT, () =>
  console.log(`Listening at port http://localhost:${PORT}`)
);

// Next steps
