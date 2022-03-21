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

// Routes
app.use("/", index);

app.listen(PORT, () =>
  console.log(`Listening at port http://localhost:${PORT}`)
);
