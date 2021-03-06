const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

// 获取根路径
const rootPath = path.resolve(__dirname, "..");
module.exports = {
  // 监听文件变化，自动打包
  watch: true,
  entry: {
    mian: `${rootPath}/src/page/home/index.tsx`,
  },
  // output: {
  //   path: path.resolve(rootPath, "dev"),
  //   filename: "[name].js",
  // },
  resolve: {
    // 处理导入文件格式
    extensions: [".ts", ".tsx", ".json", ".js"],
    //别名配置 同时需要配置tsconfig.json 文件中baseUrl与paths 以免编译器报错
    alias: {
      "@hooks": `${rootPath}/src/hook/index`,
      "@hook": `${rootPath}/src/hook`,
      "@cgis": `${rootPath}/src/cgi/index`,
      "@cgi": `${rootPath}/src/cgi`,
      "@page": `${rootPath}/src/page`,
      "@components": `${rootPath}/src/components`,
    },
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
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                javascriptEnabled: true, // 解析antd，less文件中的
              },
            },
          },
        ],
      },
      // 处理css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(swf|ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
        loader: "file-loader",
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
    quiet: true,
    contentBase: "/",
    port: 8081,
    hot: true, // 热替换
    // noInfo: true,
    // open: true,
    historyApiFallback: true, //当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html,适用于单页面应用
    // proxy: [{
    //   context: ["/auth", "/api"],
    //   target: "http://localhost:3000",
    // }],
    // historyApiFallback: {
    //   disableDotRule: true,
    // }, //当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html,适用于单页面应用
    host: "127.0.0.1",
    disableHostCheck: true, // 绕过主机域名检查，开发环境可使用
    headers: {
      // 允许跨域
      "Access-Control-Allow-Origin": "*",
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        //对html文件进行压缩
        removeAttributeQuotes: true, //去掉属性的双引号
        removeComments: true, //去掉注释
        collapseWhitespace: true, //去掉空白
      },
      // hash: true, //避免缓存js
      template: `${rootPath}/public/index.html`, // 打包模板
      favicon: `${rootPath}/public/favicon.jpg`, //网页图标
    }),
  ],
};

new webpack.ProgressPlugin((percentage, dd, jj) => {
  console.log("执行了？？？？？？？");
  if (percentage === 0) {
    console.log("开始编译");
  }
  if (percentage === 1) {
    console.log("编译结束");
  }
});
