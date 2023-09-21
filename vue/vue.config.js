const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
	publicPath: '/dist/',
	outputDir: path.resolve(__dirname, '../../../../dist'),
	configureWebpack: {
		experiments: {
			topLevelAwait: true // for can use async await in router
		}
	}
})
