module.exports = {
  entry: './index.js',
  
  output: {
    // path: 'build',
    filename: 'bundle.js'
  },
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack','babel-loader']
      },
    {
        test:/\.css$/,
        use:['style-loader', 'css-loader']
    }
      
    ]
  }
};