var mailgun = require("mailgun-js");
var express = require('express');
var path = require('path');
var app = express();

var api_key = 'key-17e4ac8180c3645d6c2c1044bd8eb380';
var DOMAIN = 'sandboxbd36d24e52d44c9788d7333f1eda5d35.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());


app.set('view engine', 'hbs');
app.listen(3000 , () => {
  console.log('Listening on port 3000');
})

app.use(express.static( __dirname + '/public'));
app.get('/send' , (req,res) => {
  res.render('mail');
})

app.post('/send',(req,res) => {
  var email = req.body.user;
  var message = req.body.text;
  res.send("Thank You for your message!");
   console.log(req.body);

   var data = {
     from: 'Mithilesh Mailgun <postmaster@sandboxbd36d24e52d44c9788d7333f1eda5d35.mailgun.org>',
     to:email,
     subject: 'Hello from nodeJs',
     text: message
   };

   mailgun.messages().send(data, function (error, body) {
    if(error){
      console.log(error);
    }
    else{
         console.log(body);
    }



   });
})

//mithi.rocks123@gmail.com
//krsnasngh@gmail.com
