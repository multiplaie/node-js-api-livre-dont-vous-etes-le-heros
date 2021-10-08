
const express = require('express');
const app = express();
require('./models/dbConfig');
const sectionRoutes = require('./routes/sectionController');

app.use(express.json())
app.use('/api/sections', sectionRoutes);
app.listen(5500, () => console.log('Server started: 5500'));