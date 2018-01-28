var express = require('express');
var request = require('request');
var co = require('co');
var wechat = require('wechat');
var account = require('./account.json');
var config = {
  token: account.wechat_token,
  appid: account.wechat_appid,
  appsecret:account.wechat_appsecret,
  checkSignature: true // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};
var message;
const app = express();
app.use(express.query());
app.use('/wechat', wechat(config, function (req, res, next) {
  // 微信输入信息都在req.weixin上
  message = req.weixin;
  res.reply('哈囉');
}));

app.get('/data',function(req,res){
  res.send(data);
});

// //因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換

var server = app.listen(process.env.PORT || 8080, function() {
var port = server.address().port;
  console.log("App now running on port", port);
});
