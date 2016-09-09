//Basic
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname,'dist');
var APP_DIR = path.resolve(__dirname,'app');

var config = {
  entry : {
    javascript: APP_DIR + '/app.js',
    html: APP_DIR + '/index.html'
  },
  output : {
    path : BUILD_DIR,
    filename : 'bundle.js'
  },
  module :{
    loaders : [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
      }
    },
    ]
  }

};

module.exports = config;
