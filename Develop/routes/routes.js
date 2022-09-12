const fs = require('fs');
const path = require('path');

module.exports = app => {

    // Setup area//
    fs.readFile('./Develop/db/db.json','utf8', (err, data) => {

        if (err) throw err;

        var notes = JSON.parse(data);

        // API route setup area//
        app.get('/', function(req, res) {
            res.json(path.join(__dirname,'./Develop/public/index.html'));
          });

        // notes//
        app.get('/api/notes', function(req, res) {
            // Read the db.json file and return all saved notes as JSON.
            res.json(notes);
        });

        // after area//
        app.post('/api/notes', function(req, res) {
            // Receives new note ifo//
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
            return console.log("new note added : "+newNote.title);
        });

        // note with id//
        app.get('/api/notes/:id', function(req,res) {
            res.json(notes[req.params.id]);
        });

        // delete notes//
        app.delete('/api/notes/:id', function(req, res) {
            notes.splice(req.params.id, 1);
            updateDb();
            console.log("note with id is deleted"+req.params.id);
        });

        //see routes//

        // show notes.html 
        app.get('/notes', function(req,res) {
            res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
        });
        
        // show index.html 
        app.get('*', function(req,res) {
            res.sendFile(path.join(__dirname,'./Develop/public/index.html'));
        });

        //updates files//
        function updateDb() {
            fs.writeFile('db/db.json',JSON.stringify(notes,'\t'),err => {
                if (err) throw err;
                return true;
            });
        }

    });

}
