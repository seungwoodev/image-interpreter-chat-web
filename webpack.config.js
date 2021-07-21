const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
 
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build"),
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve("./build"),
    index: "index.html",
    // 클라이언트 포트는 3000
    port: 3000,
    proxy: {
      '/user_info': {
      	// 서버 포트는 3001
        target: 'http://localhost:3001/',
        changeOrigin: true,
      },
      '/upload_file': {
        // 서버 포트는 3001
        target: 'http://localhost:3001/',
        changeOrigin: true,
      }
    }
  },
  mode: "development",
  module: {
    rules: [
      {
        test:/\.(css|scss)$/,
        use:['style-loader','css-loader']
    },
<<<<<<< HEAD
    {
      test: /\.svg$/,
      loader: 'file-loader'
  },
=======
>>>>>>> 5cc92de8b0cd7b78427a77bab96dac000ba0afc5
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
                limit: 4000, // 4k 미만 파일은 line 형태로 삽입
                name: 'img/[name].[ext]',
                esModule: false
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};