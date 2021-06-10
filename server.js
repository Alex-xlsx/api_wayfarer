// imports
const express = require('express');
const cors = require('cors');
// const routes = require('./routes');

const port = process.env.PORT || 4000;
const app = express();

// TODO: middleware - CORS
app.use(cors());

// middleware - JSON parsing
app.use(express.json());

// middleware - API routes

// listen
app.listen(port, () => console.log(`Server is running on port ${port}`));
