// import below//
const express = require ('express');

// Set 1st port//
const PORT = process.env.PORT || 3000;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Router area//
require('./routes/routes')(app);

// Start  server//
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`)
})
