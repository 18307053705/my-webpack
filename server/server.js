const express = require("express");
const url = require("url");
const server = express();
const MongoClient = require("mongodb").MongoClient;
const mongodbUrl = "mongodb://localhost:27017/runoob";
let urlQuery;

let data = {
  data: "",
  retcode: 0,
  error: "成功",
};

server.use("/", function (req, res, next) {
  // 可以获取登录态
  res.setHeader("Access-Control-Allow-Origin", "http://zxb.com");
  const requset_url = req.url;
  urlQuery = url.parse(requset_url, true).query;
  console.log("收到请求了");
  // if(true){ // 提前结束请求
  //   res.end(JSON.stringify(data));
  //   return false;
  // }
  next();
});

server.listen("1337", "127.0.0.1", (...rest) => {
  console.log(rest);
  console.log("服务启动成功");
  MongoClient.connect(mongodbUrl, function (err, db) {
    if (err) throw err;
   const dbo = db.db("runoob");
    server.get("/app", function (req, res) {
      console.log(urlQuery);
      dbo
        .collection("site")
        .find({})
        .toArray(function (err, result) {
          // 返回集合中所有数据
          if (err) throw err;
          // console.log('返回集合中所有数据');
          // console.log(result);
          res.send(JSON.stringify(result));
          // db.close();
        });
    });
    
    // var myobj =  [
    //     { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
    //     { name: 'Google', url: 'https://www.google.com', type: 'en'},
    //     { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
    //    ];
    // dbo.collection("site").insertMany(myobj, function(err, res) {
    //     if (err) throw err;
    //     console.log("插入的文档数量为: " + res.insertedCount);
    //     db.close();
    // });

    // db.close();
  });
});

