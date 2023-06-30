const express = require('express');
const app = express();
const results = [];

app.get('/', function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Nothing here");
});

app.get('/clear', function(req, res) {
  results = [];
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Cleared");
});


app.get('/store/*', function(req, res) {
  results.push(req.url)
  res.redirect(302, "https://www.google.com");
});

app.get('/results', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(results));
});

app.listen(3000);
