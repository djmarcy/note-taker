let express = require("express");
let index = require("./routes/index");
let notesAPI = require("./routes/api");

let PORT = process.env.PORT || 3001;

let app = express();

//Middleware in use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Direct traffic
app.use("/", index);
app.use("/api", notesAPI);

app.listen(PORT, () =>
  console.log(`Listening at port http://localhost:${PORT}`)
);
