import webpack from 'webpack';
import path from 'path';

export default {
 debug: true,
 devtool: 'inline-source-map', // ????
 noInfo: false,
 entry: [
  path.resolve(__dirname, 'src/index'),
  'webpack-hot-middleware/client'
 ],
 target: 'web', // node, electron ...
 output: {
  path: path.resolve(__dirname, 'src'),
  publicPath: '/',
  filename: 'bundle.js'
 },
 plugins : [
    new webpack.HotModuleReplacementPlugin()
 ], // hot reloading, catching errors, linting ...
 module: {
  loaders: [
    {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
    {test: /\.css$/, loaders: ['style', 'css']},
    {test: /\.html$/, loader: 'raw-loader'}
  ]
 }
}
