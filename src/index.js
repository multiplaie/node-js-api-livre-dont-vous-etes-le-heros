
const express = require('express');
const app = express();
require('./models/dbConfig');
const sectionRoutes = require('./routes/sectionController');
const config = require("../config.json");


app.use(express.json())
app.use('/api/sections', sectionRoutes);
app.listen(config.app.port, () => console.log('Server started: '+config.app.port));