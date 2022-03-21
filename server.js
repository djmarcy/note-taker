let express = require("express");
let index = require("./routes/index");
let notes = require("./routes/notes");
let path = require("path");

let PORT = process.env.PORT || 3001;

let app = express();

//Middleware in use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use("/api", api);

// Inter
app.get("/api/notes", (req, res) => {
  // For each of the 3 routes, I'll need to load separately each time; function to handle?
  // For DELETE, read notes, filter by specified note, delete specified note, save others back to db.json file
  // Assign each note a unqiue ID key
  const notes = JSON.parse(fs.readFileSync("db/db.json"));

  res.json(notes);
});

// Direct traffic to homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
);

// Wildcard route to redirect to homepage
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));

// Next steps
