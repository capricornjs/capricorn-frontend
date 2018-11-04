import DefaultLayout from 'views/layout/default'
import Home from 'pages/home'
import CreatePage from 'pages/createPage'

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
		}
	]
	
}
