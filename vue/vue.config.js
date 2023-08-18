const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	configureWebpack: {
		experiments: {
			topLevelAwait: true // for can use async await in router
		},
	}
})
