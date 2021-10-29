
const express = require('express');
const app = express();
require('./models/dbConfig');
const sectionRoutes = require('./routes/sectionController');
const sectionRvlcRoutesoutes = require('./routes/vlcController');
const config = require("../config.json");


app.use(express.json())
app.use('/api/sections', sectionRoutes);
app.use('/api/vlc', vlcRoutes)
app.listen(config.app.port, () => console.log('Server started: '+config.app.port));