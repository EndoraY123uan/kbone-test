/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */

module.exports = {
	origin: 'https://test.miniprogram.com',
	entry: '/',
	router: {
		index: ['/'],
		test: ['/test'],
		undercoverRome: ['/undercoverRome']
	},
	// redirect: {
	// 	notFound: 'index',
	// 	accessDenied: 'index',
	// },
	generate: {
		autoBuildNpm: false,
		// subpackages: {
		// 	test: ['/test'],
		// 	undercoverRome: ['/undercoverRome']
		// }
	},
	app: {
		navigationBarTitleText: '测试页面',
	},
	appExtraConfig: {
		sitemapLocation: 'sitemap.json',
	},
	global: {},
	pages: {
		index: {
			share: true
		},
		undercoverRome: {
			share: true
		}
	},
	optimization: {
		domSubTreeLevel: 10,
		elementMultiplexing: true,
		textMultiplexing: true,
		commentMultiplexing: true,
		domExtendMultiplexing: true,
		styleValueReduce: 5000,
		attrValueReduce: 5000,
	},
	projectConfig: {
		projectname: 'kbone-mini',
		appid: 'wx32a04a2a123b0d48',
	},
}