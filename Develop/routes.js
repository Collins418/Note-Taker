const fs = require('fs');
const path = require('path');

module.exports = app => {

    // variable area
    fs.readFile("./db/db.json","utf8", (err, data) => {

        if (err) throw err;

        var notes = JSON.parse(data);

        // API area
        // ========================================================
        app.get("/", function(req, res) {
            res.json(path.join(__dirname, "./public/index.html"));
          });

        // Setup api/route
        app.get("/api/notes", function(req, res) {
            // Read the db.json file and return all saved notes as JSON.
            res.json(notes);
        });

        // Setup api/after route
        app.post("/api/notes", function(req, res) {
            // Receives a new note, adds it to db.json, then returns the new note
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
            return console.log("Added new note: "+newNote.title);
        });

        // get id
        app.get("/api/notes/:id", function(req,res) {
            // display json for the notes array indices of the provided id
            res.json(notes[req.params.id]);
        });

        // Delete area
        app.delete("/api/notes/:id", function(req, res) {
            notes.splice(req.params.id, 1);
            updateDb();
            console.log("Deleted note with id "+req.params.id);
        });

        // ROUTES YOU CAN SEE
        // ========================================================

        // Display notes.hml area
        app.get('/notes', function(req,res) {
            res.sendFile(path.join(__dirname, "./public/notes.html"));
        });
        
        // Display index.html
        app.get('*', function(req,res) {
            res.sendFile(path.join(__dirname, "./public/index.html"));
        });

        //updates the json file
        function updateDb() {
            fs.writeFile("./db/db.json",JSON.stringify(notes,'\t'),err => {
                if (err) throw err;
                return true;
            });
        }

    });

}