var express = require('express')
var app = express()

app.get('/api/whoami', function (req, res) {
 var ip,lang,os,
  ip= req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  lang =  req.headers["accept-language"].split(',')[0];
  os =  req.headers['user-agent'].split(/[\(\)]/)[1];
 console.log(ip)
 console.log( req.headers["accept-language"].split(',')[0])
 console.log(req.headers.host)
 console.log('User-Agent: ' + req.headers['user-agent'].split(/[\(\)]/)[1]);
 
  res.send({"ipaddress":ip,"language":lang,"software":os});
})



app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})