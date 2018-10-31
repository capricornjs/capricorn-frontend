import React, { Component } from 'react'
import classnames from 'classnames'
import moduleServer from 'server/module'

export default class Home extends Component {
	UNSAFE_componentWillMount () {
		moduleServer.getModuleList().then((res) => {
			console.log(res)
		})
	}
	
	render () {
		return (
			<div className={classnames('page-home flex-center', { 'test': true })}>
				<div>Home - capfdsdsn-frontend</div>
			</div>
		)
	}
}
