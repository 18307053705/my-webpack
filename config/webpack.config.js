
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 获取根路径
const rootPath = path.resolve(__dirname, '..');
module.exports = {
  // 监听文件变化，自动打包
  watch: true,
  entry: `${rootPath}/src/index/index.tsx`,
  output: {
    path: path.resolve(rootPath, 'dev'),
    filename: '[name].js',
  },

  
  mode: 'development',
  module: {
    rules: [
      // 处理react
      {
        test: /(\.js|\.jsx|\.ts|\.tsx)$/,
        exclude: /node_modules/,
        use:[
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
              // configFile: `${rootPath}/tsconfig.json`,
            },
        },
      ]
      },
      // 处理less
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      // 处理css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // 处理图片
      {
        test:  /\.(png|jpg|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name:'img/[name].[ext]'

        }
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: `${rootPath}/src/index/index.html`,
  })],
};

