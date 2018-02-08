var path = require("path");
var uglify = require("uglifyjs-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "./src"),
  entry: "./index.js",
  output: {
  	path: path.join(__dirname, "./dist"),
  	filename: "js/vue-toast-y.min.js",
  	libraryTarget: "umd", 		// 打包的格式
  	library: "VueToastY" 		//打包后的模块名
  },
  module: {
  	rules: [
  	  {
  	  	test: /\.vue$/,
  	  	use: [
  	  	  {
  	  	  	loader: "vue-loader",
  	  	  	options: {
  	  	  	  loaders: {
  	  	  	    scss: "style-loader!css-loader!sass-loader",
  	  	      },
  	  	      postcss: [require('autoprefixer')({ browsers: ["last 5 versions"] })]
  	  	    }
  	  	  }
  	  	],
  	  	exclude: /node_modules/,
  	  },
  	  {
  	  	test: /\.js$/,
  	  	use: [
  	  	  {
  	  	  	loader: "babel-loader",
  	  	  	options: {
  	  	  	  presets: ["env"]
  	  	  	}
  	  	  }
  	  	],
  	  	exclude: /node_modules/,
  	  	include: path.join(__dirname, "./src")
  	  }
  	]
  },
  plugins: [
    new uglify()
  ]
}