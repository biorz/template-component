const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const config = require('./config');

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';

const webpackConfig = {
  entry: isProd ? {
    docs: './examples/entry.js',
    'ymm-design': './src/index.js'
  } : ('./examples/play.js'),
  output: {
    path: path.resolve(process.cwd(), './examples/ymm-design/'),
    publicPath: process.env.CI_ENV || '',
    filename: '[name].[hash:7].js',
    chunkFilename: isProd ? '[name].[hash:7].js' : '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules']
  },
  devServer: {
    host: '0.0.0.0',
    port: 8085,
    publicPath: '/',
    noInfo: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules|bower_components/,
        loader: 'eslint-loader'
      },
      {
        enforce: 'pre',
        test: /\.vue$/,
        exclude: /node_modules|bower_components/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: config.jsexclude,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader?minimize=false'
      },
      {
        test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.svg(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.tpl',
      filename: './index.html'
    }),
    new ProgressBarPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      vue: {
        preserveWhitespace: false
      }
    })
  ]
};

if (isProd) {
  webpackConfig.externals = {
    vue: 'Vue',
    'vue-router': 'VueRouter'
  };
  webpackConfig.module.rules.push(
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        extractCSS: true,
        preserveWhitespace: false
      }
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      })
    }
  );
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:7].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['ymm-design', 'manifest']
    })
  );
}
if (isDev) {
  webpackConfig.module.rules.push(
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        preserveWhitespace: false
      }
    },
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader']
    }
  );
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  );
}

module.exports = webpackConfig;
