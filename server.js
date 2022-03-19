let express = require("express");
let api = require("./routes/index");

let PORT = process.env.PORT || 3001;

let app = express();

//Middleware in use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
api.use("/api", api);

// Direct traffic to homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// Wildcard route to redirect to homepage
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
