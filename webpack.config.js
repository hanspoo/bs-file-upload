
const path = require('path');

module.exports = {
  entry: './src/components/FileUpload.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  // output: {
  //   path: path.join(__dirname, '/dist'),
  //   filename: 'App.min.js'
  // },
  output: {
    library: 'FileUpload',
    libraryTarget: 'umd',
    path: path.join(__dirname, '/dist'),
    filename: 'FileUpload.js'
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  externals: {
    react: 'React',
    "react-dom": 'ReactDOM'
  }
}
