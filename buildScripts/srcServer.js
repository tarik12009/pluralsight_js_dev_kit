import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDev from 'webpack-dev-middleware';
import hmr from 'webpack-hot-middleware';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(webpackDev(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(hmr(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
