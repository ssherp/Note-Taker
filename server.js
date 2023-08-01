//import all packages
// refer port
const express = require('express');
const path = require('path');
const notesData = require('./db/db.json');
const fs = require("fs")
const PORT = process.env.PORT || 3001;
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.static('public'));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/notes', (req, res) => {
  res.json(notesData);
});
// res.json(notesData));

//route for index.html
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});
//route for note.html

app.post('/api/notes', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  req.body.id = uuidv4()
  const newNotes = req.body;

  // We then add the json the user sent to the character array
  notesData.push(newNotes);

  fs.writeFileSync('./db/db.json', JSON.stringify(notesData, null, 4));
  // We then display the JSON to the users
  res.json(notesData);

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
