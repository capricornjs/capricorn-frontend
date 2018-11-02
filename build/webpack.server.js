const path = require('path')
const serverConf = {
	contentBase: path.resolve(__dirname, '../src'),
	progress: false,
	hot: true,
	inline: true,
	proxy: {},
	historyApiFallback: true,
	stats: {
		colors: true
	}
}

const proxyPaths = [
	'module'
];
proxyPaths.forEach(function(v){
	serverConf.proxy[`/${v}/*`] ={
		target: 'http://127.0.0.1:3000/',
		changeOrigin: true
	}
})

module.exports = serverConf

