import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';



export default {
  devtool: 'sourcemap',
  entry: ['babel-polyfill', './src/public/app/app.js'],
  output: {
    filename: '[name].bundle.js',
    publicPath: './',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate!babel!eslint'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.scss$/, loader: 'style!css!sass'},
      {test: /\.css$/, loader: 'style!css'},
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'src')]
  },
  plugins: [
    // Injects bundle.js into the index.html file instead of wiring it all manually.
    // It also adds hash to all injected assets so we don't have problems with cache purging during deployment
    new HtmlWebpackPlugin({
      template: 'src/public/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => module.resource && module.resource.indexOf(path.resolve(__dirname, 'src', 'public')) === -1
    })
  ]
}