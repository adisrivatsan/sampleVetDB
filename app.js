var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    restful = require('node-restful'),
    mongoose = restful.mongoose;
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());
app.use(express.static(__dirname + '/'));

mongoose.connect(process.env.MONGOLAB_URI);

var Resource = app.resource = mongoose.model('resource', mongoose.Schema({
    title: String,
    year: Number
  }))
  .methods(['get', 'post', 'put', 'delete']);

//Resource.register(app, '/resources');
var port = 3000 || port.env.PORT;


app.get('/',function(req,res) {
  res.send('this is working');
})



app.listen(port);
console.log('listening on port 3000');
