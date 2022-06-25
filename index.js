const express = require("express");
const app = express();
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
  {
    username: "Todd",
    comment: "lol, that was a funny one!",
  },
  {
    username: "Sky",
    comment: "Hahahaa",
  },
  {
    username: "Bell ball",
    comment: "@Todd, its isnt much funny",
  },
  {
    username: "only woof",
    comment: "woof woof woof",
  },
];
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});
app.get("/", (req, res) => {
  res.send("WoHooo, You are at he home page");
});

app.listen("3000", (req, res) => {
  console.log("Listening on port 3000!");
});
