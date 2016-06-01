import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'sourcemap',
  entry: ['babel-polyfill', './src/app/app.js'],
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'src')
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate!babel!eslint'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.scss$/, loader: 'style!css!sass'},
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'src')]
  },
  plugins: [
    // Injects bundle.js into the index.html file instead of wiring it all manually.
    // It also adds hash to all injected assets so we don't have problems with cache purging during deployment
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === -1
    })
  ]
}