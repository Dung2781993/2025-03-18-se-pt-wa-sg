const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

// Load Sequelize and models
const db = require('./models');
const clinicRoutes = require('./routes/clinicRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/clinic', clinicRoutes);

// Connect to DB
db.sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Start server
app.listen(port, () => {
  console.log(`Running on the port http://localhost:${port}`);
});
