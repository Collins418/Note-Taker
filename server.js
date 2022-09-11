// import below
const express = require('express')
//  express server area
const app = express();
// which port
const PORT = process.env.PORT ||3000;

// add middleware part - stackflow help
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const apiRoutes = require("./routes/apiroutes");
const htmlRoutes = require("./routes/htmlroutes");
app.use(apiRoutes);
app.use(htmlRoutes);

// server starter
app.listen(PORT, function () {
  console.log("server is listening on http://localhost:" + PORT);
});

