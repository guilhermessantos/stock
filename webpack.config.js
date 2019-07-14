const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  devServer: {
    filename: 'app.js',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  resolve: {
    alias: {
      'utils': path.resolve(__dirname, 'src/components/utils/utils'),
      'config': path.resolve(__dirname, 'src/components/utils/config')
    }
  },
  resolveLoader: {
    modules: ['node_modules'],
    extensions: ['.js', '.json']
  }
}
