const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

const db = "../db/db.json";

//router notes area
router.get("/api/notes", function (req, res) {
  
  const notes = JSON.parse(fs.readFileSync(db, "utf8"));

  res.json(notes);
});

//https://expressjs.com/en/api.html
router.post("/api/notes", function (req, res) {
  // get notes
  const notes = JSON.parse(fs.readFileSync(db, "utf8"));
  //console.log(typeof notes);

  //create notes https://expressjs.com/en/api.html#express.router, add id and note
  const newNote = req.body;

  
  newNote.id = uniqid();
  //console.log(newNote);

  //new note area
  notes.push(newNote);

  //writefile area
  fs.writeFile(db, JSON.stringify(notes), (err) => {
    if (err) throw err;
    console.log("New note have be created, Enjoy!");
  });

  
  res.json(newNote);
});

// Delete old stuff
router.delete("/api/notes/:id", function (req, res) {

  const chosenNote = req.params.id;
  //const chosenNote = parseInt(req.params.id);
  const notes = JSON.parse(fs.readFileSync(db, "utf8"));
  

  for (let i = 0; i < notes.length; i++) {
    // console.log(typeof chosenNote, typeof notes[i].id);
    if (chosenNote === notes[i].id) {
      notes.splice(notes.indexOf(notes[i]), 1);
    }
  }

  
  fs.writeFile(db, JSON.stringify(notes), (err) => {
    if (err) throw err;
    console.log("Delete notes!");
  });
  res.json(notes);
});

module.exports = router;