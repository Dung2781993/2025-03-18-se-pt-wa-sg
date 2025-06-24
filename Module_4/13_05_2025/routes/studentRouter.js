const express = require('express');
const studentRouter = express.Router();

studentRouter.get('/', (req, res) => {
  res.json("Hello students")
});


module.exports = studentRouter;