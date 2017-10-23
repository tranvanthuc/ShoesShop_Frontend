var ExtractTextPlugin = require('extract-text-webpack-plugin');

var IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
    entry: [
      './app/app.module.js',
    ],
    output: {
        path: __dirname + '/bin',
        filename: 'app.bundle.js',
    },
    watch: !IS_PROD,
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css-loader!sass-loader')
          },
          { test: /\.html$/, loader: "html-loader" },
      ]
    },
    plugins: [
      new ExtractTextPlugin('./app.bundle.css'),
    ],
    devtool: "#inline-source-map"
}