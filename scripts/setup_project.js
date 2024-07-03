#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';


const projectDir = `${process.cwd()}`;

// Install dev dependencies
execSync('npm install --save-dev \
    @babel/core \
    babel-loader \
    @babel/preset-env \
    @babel/plugin-transform-react-jsx \
    path \
    webpack \
    webpack-cli \
    webpack-dev-server \
    html-webpack-plugin \
    ', { stdio: 'inherit' });

// Create project structure
fs.mkdirSync('src');
fs.writeFileSync('src/app.jsx', `
import ftReact from "ft_react";

const App = (props) => {
    return <span>Hello World!</span>
}

const root = document.getElementById("app");
ftReact.render(<App/>, root);
`);

// Create .babelrc
fs.writeFileSync('.babelrc', `
{
	"presets": ["@babel/preset-env"],
	"plugins": [
		["@babel/plugin-transform-react-jsx", {
			"pragma": "ftReact.createElement"
		}]
	]
}
`);
// Create webpack config
fs.writeFileSync('webpack.config.js', `
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
	entry: './src/app.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		open: true,
		host: 'localhost',
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/public/index.html',
			// favicon: './src/public/favicon.ico'
		}),
	],
	module: {
		rules: [
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';
	} else {
		config.mode = 'development';
	}
	return config;
};

`);

fs.mkdirSync('src/public');
// Create index.html
fs.writeFileSync('src/public/index.html', `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FT React App</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
`);

// Add scripts to package.json
const packageJson = JSON.parse(fs.readFileSync('package.json'));
packageJson.scripts = {};
packageJson.scripts.start = "webpack serve --mode development --open";
packageJson.scripts.build = "webpack --mode=production --node-env=production";
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log(`Project ${projectName} is set up. Run 'npm start' to start the development server.`);
