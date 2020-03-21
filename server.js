const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
var indexRouter = require('./app/routes/turorial.routes');
var corsOptions = {
  // origin: 'http://localhost:5010'
  origin: 'http://35.180.16.198'
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./app/models');
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to dan AWS Progresql application.' });
// });
if (true) {
  app.use(express.static('build'));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.use('/', indexRouter);

// set port, listen for requests
const PORT = process.env.PORT || 5010;
// var port = normalizePort(process.env.PORT || '5010');
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
