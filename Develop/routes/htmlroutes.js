const path = require("path");
const express = require("express");

// express server https://expressjs.com/
const router = express.Router();

// html routes
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
