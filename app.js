var express=require('express');
var stripe=require('stripe')('sk_test_go4mUAcLt2dXxMKK6X19VEIf');
var bodyParser=require('body-parser');
var exphbs=require('express-handlebars');

var app=express();
var port=process.env.PORT || 1000;

app.listen(port,function(){
  console.log('Magic at 1000');
});
