const express = require('express');
const router = express.Router();
const VLC = require('node-vlc-json');
const config = require("../../config.json");
const player = new VLC({httpPort: config.vlc.port, httpPassword: config.vlc.password});

router.get('/play', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
    player.play(req.query.path, function() {
        player.status(function(res) {
          console.log(res.state);
        });
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ "status": "play" }));
});

module.exports = router;