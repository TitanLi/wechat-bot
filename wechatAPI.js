var express = require('express');
var request = require('request');
var co = require('co');
var WechatAPI = require('wechat-api');
var account = require('./account.json');

var api = new WechatAPI(account.wechat_appid, account.wechat_appsecret);

const app = express();
app.use(express.query());

app.get('/wechat/data',function(req,res){
  api.sendText('openid', 'Hello world', function(){

  });
  res.send("ok");
});

// //因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換

var server = app.listen(process.env.PORT || 8080, function() {
var port = server.address().port;
  console.log("App now running on port", port);
});
