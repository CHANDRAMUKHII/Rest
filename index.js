const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
uuid();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "lol, that was a funny one!",
  },
  {
    id: uuid(),
    username: "Sky",
    comment: "Hahahaa",
  },
  {
    id: uuid(),
    username: "Bell ball",
    comment: "@Todd, its isnt much funny",
  },
  {
    id: uuid(),
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
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.get("/", (req, res) => {
  res.send("WoHooo, You are at he home page");
});

app.listen("3000", (req, res) => {
  console.log("Listening on port 3000!");
});
