const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const sorting = require('postcss-sorting');
const cssmqpacker = require('css-mqpacker');
const flexbugsFixes = require('postcss-flexbugs-fixes');
const assets = require('postcss-assets');
const cssnano = require('cssnano');

module.exports = {
  entry: [
    './app/assets/_js/app.js',
    './app/assets/_styles/_main.scss',
  ],
  output: {
    path: path.resolve(__dirname, 'build/assets/js'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      // loader: 'style!css!scss!postcss',
      // use: ExtractTextPlugin.extract({
      // //   fallback: 'style-loader',
      //   use: ['css-loader?importLoaders=1', 'css-loader?-autoprefixer!postcss-loader'],
      // }),
    }, {
      test: /\.(sass|scss)$/,
      use: ExtractTextPlugin.extract({
        // fallback: 'style-loader',
        use: [
          { loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                assets({
                  loadPaths: ['assets/img'], // 対象ディレクトリ
                  basePath: './build', // 公開ディレクトリ
                }),
                sorting(),
                autoprefixer(),
                cssmqpacker({
                  sort: true,
                }),
                flexbugsFixes(),
                cssnano(),

              ],
            },
          },
          { loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'stylefmt-loader',
            options: {
              config: '.stylelintrc',
            },
          },
        ],
      }),
    },
    // {
    //   test: /\.(png|jpg|gif|svg)$/,
    //   loader: 'file-loader',
    //   options: {
    //     name: '[name].[ext]?[hash]',
    //   },
    // }
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '../../assets/css/[name].css',
      allChunks: true,
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        sassloader: {
          includePaths: path.resolve(__dirname, 'app/assets/_styles/'),
        },
        // postcss: [
        //   assets({
        //     loadPaths: ['assets/img'], // 対象ディレクトリ
        //     basePath: './build', // 公開ディレクトリ
        //   }),
        //   sorting(),
        //   // autoprefixer({
        //   //   browsers: ['last 2 versions'],
        //   // }),
        //   autoprefixer(),
        //   cssmqpacker({
        //     sort: true,
        //   }),
        //   flexbugsFixes(),
        //   cssnano(),
        // ],
      },
    }),
  ],
  resolve: {
    extensions: ['*', '.ts', '.vue', '.js', '.css', '.scss'],
  },
  // configuration for dev server.
  devServer: {
    contentBase: 'build/',
    port: 4000,
    historyApiFallback: true,
    noInfo: true,
  },
  // devtool: '#eval-source-map',
  devtool: '#source-map',
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    // new ExtractTextPlugin({
    //   filename: './build/assets/css/[name].css',
    //   allChunks: true,
    // }),
  ]);
}
