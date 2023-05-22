const express = require('express');
const cors = require('cors');

const db = require('./models');
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.');
});

const app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Usman Malik Application.' });
});

require('./routes/tutorial.route')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}.`);
});
