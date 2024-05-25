// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Create a new comment
app.post('/comments', function (req, res) {
  var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));
  var newComment = req.body;
  comments.push(newComment);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.send('Comment added.');
});

// Get all comments
app.get('/comments', function (req, res) {
  var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));
  res.json(comments);
});

app.use(bodyParser.json());

app.listen(3000, function () {
  console.log('Server is running on http://localhost:3000');
});