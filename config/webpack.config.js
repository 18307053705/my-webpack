const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

// 获取根路径
const rootPath = path.resolve(__dirname, "..");
module.exports = {
  // 监听文件变化，自动打包
  watch: true,
  entry: {
    index:`${rootPath}/src/index/index.tsx`,
    // index: path.resolve(__dirname, "../src/index/index.tsx"),
  },
  output: {
    path: path.resolve(rootPath, "dev"),
    filename: "[name].js",
  },
  resolve: {
    // 处理导入文件格式
    extensions: ['.ts', '.tsx', '.json', '.js'],
    //别名配置 同时需要配置tsconfig.json 文件中baseUrl与paths 以免编译器报错 
    alias:{
      "@hook": `${rootPath}/src/hook`,
    }
},
  mode: "development",

  module: {
    rules: [
      // 处理react
      {
        test: /(\.js|\.jsx|\.ts|\.tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                //接入ts打包
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      // 处理less
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // 处理css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // 处理图片
      {
        test: /\.(png|jpg|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 1000,
          name: "img/[name].[ext]",
        },
      },
    ],
  },
 

  
  // https://www.webpackjs.com/configuration/dev-server/#devserver-historyapifallback 配置webpack服务
  devServer: {
    contentBase: "./dist",
    port: 8081,
    hot: true, // 热替换
    // open: true,
    historyApiFallback:true,  //当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html,适用于单页面应用
    host: "127.0.0.1",
    disableHostCheck: true, // 绕过主机域名检查，开发环境可使用
    headers: { // 允许跨域
      "Access-Control-Allow-Origin": "*",
    },
  },
//   resolve: {
//     extensions: ['.js', '.ts','.jsx', '.vue', '.json']
//  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        //对html文件进行压缩
        removeAttributeQuotes: true, //去掉属性的双引号
        removeComments: true, //去掉注释
        collapseWhitespace: true, //去掉空白
      },
      // hash: true, //避免缓存js
      template: `${rootPath}/src/index/index.html`, // 打包模板
    }),
  ],
};

// new webpack.ProgressPlugin((percentage, dd, jj) => {
//   console.log("执行了？？？？？？？");
//   if (percentage === 0) {
//     console.log("开始编译");
//   }
//   if (percentage === 1) {
//     console.log("编译结束");
//   }
// });
