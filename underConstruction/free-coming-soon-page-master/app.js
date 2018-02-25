var express = require("express");
var path = require('path');
var nodemailer= require("nodemailer");
var Parser= require('body-parser');

var app = express();

//viewing on local host to test 

app.use(express.static('public'));
app.use(Parser.urlencoded({extended:false}));
app.use(Parser.json());

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.post("/send", (req,res)=>{
    console.log(req.body);
});

app.listen(8080);

//-------------SENDING INFORMATION NOTIFICATION-----------//

let transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure: true,
    auth: {
        type:"OAuth2",
        clientId: "797493060271-k7kp6v64t0kgm8g501cqot8ciqio2oi7.apps.googleusercontent.com",
        clientSecret:"Afx8MQrC5EZhyAbHqdCY8djB",
    }
});

transporter.sendMail({
    from: "Tech@ellebelleproductions.com",
    to:"lpb@ellebelleproductions.com",
    subject:"Possible Client",
    text:"Check the google document for newest email",
    auth:{
        user:"tech@ellebelleproductions.com",
        refreshToken:"ya29.GltsBWqn46PrD-tnplL7iOU_pbn30nO-kmbNSCypUO7wqatkCbIUM_h-GmTNpQ8Y5jq2nuEgz6sWSl8b4x1ec4Qn95kHVkMzFkR57xrFxI2t1qMZSmU9h3KVpPAG",
        accessToken:"1/pdJ6rdxtF7_lp2hJ3lIjd1FvMIzup5MNBH4fGto0lZw",
        expires:3600
    }
});