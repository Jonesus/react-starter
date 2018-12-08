const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: './src/app',
  module: {
    rules: [
      {
        test: [/.js$|.ts$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/typescript',
              '@babel/preset-env'
            ]
          }
        }
      },
      {
        test: [/.css$|.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          noquotes: true
        }
      },
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js', '.ts'],
    alias: {
      '/': path.resolve(__dirname, 'src')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[contenthash:8].js',
    publicPath: '/'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Starter',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
}

