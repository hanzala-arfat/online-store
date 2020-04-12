const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router/router");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/", router);

app.use(express.static(path.join(__dirname, "public")));
//app.use(bodyParser.urlencoded({ extended: false }));

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.json({
//     message: "Behold The MEVN Stack!",
//   });
// });

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
