var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
  'script!jquery/dist/jquery.min.js',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	resolve:{
		root: __dirname,
		modulesDirectories: [
			'node_modules',
			'./src/components',
			'./style'
		],
		alias: {
			applicationStyles: 'style/style.scss'
		},
		extensions: ['', '.js', '.jsx']
	},  
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]
	},
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
