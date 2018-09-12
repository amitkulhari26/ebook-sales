var express=require('express');
var stripe=require('stripe')('sk_test_go4mUAcLt2dXxMKK6X19VEIf');
var bodyParser=require('body-parser');
var exphbs=require('express-handlebars');

var app=express();

// Handlebars middleware
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set Static folder
app.use(express.static(`${__dirname}/public`));

// Index route
app.get('/',function (req, res) {
  res.render('index');
});

var port=process.env.PORT || 1000;
app.listen(port,function(){
  console.log('Magic at 1000');
});
