const mongoose = require('mongoose');
const config = require('../../config.json');

mongoose.connect(
  "mongodb://"+config.db.ip+":"+config.db.port+"/"+config.db.database,
  {useNewUrlParser: true, useUnifiedTopology: true},
  (err) => {
    if(!err) console.log("Database Connected");
    else console.log("Connection error :"+ err);
  }
);

