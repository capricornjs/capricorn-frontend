import React, { Component } from 'react'
import ModuleList from './module/moduleList'
import Router from 'moreact-router'
import service from './service'
import './index.less'

export default class CreatePage extends Component {
	constructor () {
		super()
		service.setConfig(Router.current.params)
	}
	
	render () {
		return (
			<div className="page-create-page d-f h-full">
				<ModuleList />
			</div>
		)
	}
}
