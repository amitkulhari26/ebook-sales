var express = require('express');
var keys=require('./config/keys');
var stripe = require('stripe')(keys.stripeSecretKey);
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();

// Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static folder
app.use(express.static(`${__dirname}/public`));

// Index route
app.get('/', function (req, res) {
  res.render('index',{
    stripePublishableKey:keys.stripePublishableKey
  });
});

// charge route

app.post('/charge', function (req, res) {
  var amount = 2500;

  console.log('credit card data', req.body);

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer => stripe.charges.create({
    amount: amount,
    description: 'Web Development Ebook',
    currency: 'usd',
    customer: customer.id
  }))
    .then(charge => res.render('sucess'));
})

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Magic at 5000');
});
