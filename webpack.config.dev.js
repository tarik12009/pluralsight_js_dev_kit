import webpack from 'webpack';
import path from 'path';

export default {
 debug: true, // debugging information
 devtool: 'inline-source-map', // compilation speed vs quality 
 noInfo: false, // display a list of all the files that is bundling
 entry: [
  path.resolve(__dirname, 'src/index'),
  'webpack-hot-middleware/client'
 ],
 target: 'web', // or node, electron ...
 output: { 
  path: path.resolve(__dirname, 'src'),
  publicPath: '/',
  filename: 'bundle.js'
 },
 plugins : [
    new webpack.HotModuleReplacementPlugin()
 ], // hot reloading, catching errors, linting styles ...
 module: {
  loaders: [
    {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
    {test: /\.css$/, loaders: ['style', 'css']}, // or less, sass ...
    {test: /\.html$/, loader: 'raw-loader'}
  ]
 }
}