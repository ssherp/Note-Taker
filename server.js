//import all packages
// refer port
const express = require('express');
const path = require('path');
const notesData = require('./db/db.json');

const PORT = 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
//route for index.html
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});
//route for note.html

app.get('/api/notes', (req, res) => res.json(notesData));

app.post('/api/notes', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newNotes = req.body;
  
    console.log(newNotes);
  
    // We then add the json the user sent to the character array
    notesData.push(newNotes);
  
    // We then display the JSON to the users
    res.json(newNotes);
  });


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});


//set route to dp.json file
    //GET /api/notes




//route for post= when used wants to make a new note
    //POST /api/notes
//optional: route for delete= delete posted info based on id
    //DELETE /api/notes/:id
//listen on port
