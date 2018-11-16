import React, { Component } from 'react'
import Router from 'moreact-router'
import './index.less'

export default class ModuleWinodw extends Component {
	constructor () {
		super()
		this.pageName = Router.current.params.pageName || ''
		this.url = `http://127.0.0.1:8080/${this.pageName}/`
	}
	
	render () {
		return (
			<div className="module-window">
				<div className="header"></div>
				<div className="wrap">
					<iframe src={this.url} className="full" frameBorder="0"></iframe>
				</div>
			</div>
		)
	}
}
