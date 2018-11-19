import DefaultLayout from 'views/layout/default'
import Home from 'pages/home'
import CreatePage from 'pages/createPage'
import Pages from 'pages/pages'

export default {
	index: 'home',
	emptyPage: 'home',
	type: 'hash',
	routeList: [
		{
			layout: DefaultLayout,
			routes: {
				'home': Home
			}
		},
		{
			layout: DefaultLayout,
			routes: {
				'createPage': CreatePage
			}
		},
		{
			layout: DefaultLayout,
			routes: {
				'pages': Pages
			}
		}
	]
	
}
