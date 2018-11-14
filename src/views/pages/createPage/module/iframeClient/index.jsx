import React, { Component } from 'react'
import pageServer from 'server/page'
import Router from 'moreact-router'
import './index.less'

export default class IframeClient extends Component {
	componentDidMount () {
		const { pageName } = Router.current.params
		pageServer.queryPage({ pageName }).then((res) => {
			console.log(res)
		})
	}
	
	render () {
		return (
			<div className="module-iframe-client">
				123
			</div>
		)
	}
}
