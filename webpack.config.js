const path = require('path');
const HtmlWebackPlugin = require('html-webpack-plugin')

module.exports = {
 entry: './src/index.js',
 output: {
  path: path.resolve(__dirname,'dist'),
  filename: 'index_bundle.js'
 },
 resolve: { 
  extensions: ['.js', '.jsx'],
  modules: [
    path.resolve(__dirname,'./src'),
    path.resolve(__dirname,'node_modules'),
  ]
 },
 module: {
  rules: [
  	{ test: /\.(js)$/,use:'babel-loader'},
  	{ test: /\.css$/, use: ['style-loader','css-loader']}
  ]
 },
 mode: 'development',
 plugins: [
  new HtmlWebackPlugin({
   template: './src/index.html'
  })
 ]
}