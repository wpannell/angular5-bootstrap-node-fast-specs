var webpack = require('webpack');
var helpers = require('./helpers');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      App: path.resolve(__dirname, 'web/app/')
    }
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: {configFileName: helpers.root('tsconfig.json')}
          }, 'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('web/app'),
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader?sourceMap',
          use: 'css-loader?sourceMap'
        })
      },
      {
        test: /\.css$/,
        include: helpers.root('web/app'),
        loader: 'css-to-string-loader!css-loader'
      }
    ]
  },
  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)esm5/,
      helpers.root('web'),
      {}
    ),
    new webpack.optimize.CommonsChunkPlugin({ //Keep the vendor code out of the app
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({ //Inject scripts and links into index.html
      template: helpers.root('web/index.html')
    })
  ],
  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false
  }
};
