const express = require('express');
const app = express();
const cors = require('cors');
const dbutils = require('../db/dbutils');

let port = 3002;

app.use(express.static(__dirname + '/../client/dist'));

app.get('/rooms/:listingId/images', cors(), (req, res) => {
  console.log('Heard a GET request');
  dbutils.fetchImages(req.params.listingId)
    .then(images => {
      res.send(JSON.stringify(images))
    })
    .then(() => console.log('...images sent'))
    .catch(err => {
      console.log('Database retrieval failed', err);
    })
})

app.listen(port);
console.log('Listening on port', port);