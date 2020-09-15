const express=require('express')
var url  = require('url');

var server=express()

let urlQuery;
let data = {
  data:'',
  retcode:0,
  error:'成功'
}
server.use('/',function(req,res,next){ // 可以获取登录态
  res.setHeader("Access-Control-Allow-Origin", "http://zxb.com");
  const requset_url = req.url;
  urlQuery  = url.parse(requset_url,true).query;
  console.log('收到请求了')
  // if(true){ // 提前结束请求
  //   res.end(JSON.stringify(data));
  //   return false;
  // }
  next();
})


server.get('/app',function(req,res){
  console.log( urlQuery)
  res.send(JSON.stringify(data))
})
server.get('/app/app2',function(req,res){
  console.log( urlQuery)
  res.send(JSON.stringify(data))
})


server.listen("1337", "127.0.0.1", () => {
  console.log("服务启动成功");
});
