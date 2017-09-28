const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('Hello World from MyBranch!');
});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});