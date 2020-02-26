const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
	[
		optimizedImages
	],

	{
		webpackDevMiddleware : (config) => {
			config.watchOptions = {
				poll             : 1000, // Check for changes every second
				aggregateTimeout : 300 // delay before rebuilding
			};
			return config;
		}
		// webpack(config) {
		// 	config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

		// 	return config;
		// }
	}
]);
