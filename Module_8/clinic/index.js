require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;


// Load Sequelize and models
const db = require("./models");

// Route files
const clinicRoutes = require("./routes/clinicRoutes");
const authRoutes = require("./routes/auth.routes");
// Using redis
const rateLimiter = require("./middleware/rateLimiter");


// Middleware
app.use(cors());
app.use(express.json());

// Apply globally or per route per minute
// app.use(rateLimiter(30, 60));

// Routes
app.use("/api/clinic", clinicRoutes);
app.use("/api/auth", authRoutes);



// DB Connection
db.sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Start server
app.listen(port, () => {
  console.log(`Running on the port http://localhost:${port}`);
});
