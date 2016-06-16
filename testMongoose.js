var mongoose = require('mongoose');
mongoose.connect('mongodb://adisri:srivatsan21@ds015334.mlab.com:15334/heroku_8bp865gl');

var VendorSchema = mongoose.Schema({
    Name: String,
    Hour: String
});

var Vendor = mongoose.model('Vendor', VendorSchema);

var Terry = new Vendor({ Name:'Terry', Hour: '10-11' });

var saveFunction = function() {
  Terry.save(function (err, ter) {
    if (err) return console.error(err);
    console.log('working');
  });
}


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  var data = db.collection('FoodTruckVendorInfo').find();
  //console.log(data);
  Vendor.find(function (err, vendors) {
  //console.log('hello' + vendors);
  for(x in vendors) {
    console.log(vendors[x].Hour);
  }
  db.close();
  })


});

//db.close();
