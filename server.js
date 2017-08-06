var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  
});app.get('/ARTICLE-ONE',function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'ARTICLE-ONE.html'));
    
});

app.get('/ARTICLE-TWO',function (req,res){
     res.sendFile(path.join(__dirname, 'ui', 'ARTICLE-TWO.html'));
    
    
});

app.get('/ARTICLE-THREE',function (req,res){
     res.sendFile(path.join(__dirname, 'ui', 'ARTICLE-THREE.html'));
    
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
