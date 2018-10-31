import React, { Component } from 'react'
import Test from './test'
import classnames from 'classnames'
import { hot } from 'react-hot-loader'

class Home extends Component {
	render () {
		return (
			<div className={classnames('page-home flex-center', { 'test': true })}>
				<Test />
				<div>Home - capricorn-frontend</div>
			</div>
		)
	}
}

/*eslint-disable*/
export default hot(module)(Home)
/*eslint-disable*/
