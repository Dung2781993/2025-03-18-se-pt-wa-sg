const express = require("express");
const cors = require('cors');

const app = express();
const sequelize = require('./config/database');
const studentRoutes = require('./routes/student.routes');


const port = 8000;

app.use(cors());

app.use(express.json());

app.use('/api', studentRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.listen(port, () => {
  console.log(`Running on the port http://localhost:${port}`)
})
