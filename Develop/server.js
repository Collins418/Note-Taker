// dependencies area//
const express = require ('express');


// orinigal port area//
const PORT= process.env.PORT||3000;

const app = express();

// Sets up Express area//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//http://expressjs.com/en/guide/routing.html//
require('./routes.js')(app);

// Start server section//
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

