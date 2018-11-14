import React, { Component } from 'react'
import ModuleList from './module/moduleList'
import IframeClient from './module/iframeClient'
import './index.less'

export default class CreatePage extends Component {
	render () {
		return (
			<div className="page-create-page d-f h-full">
				<ModuleList />
				<IframeClient />
			</div>
		)
	}
}
