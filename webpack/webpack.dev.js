const webpack = require('webpack')
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'proccess.env.name': JSON.stringify('Vishwas')
    })
  ]
}
