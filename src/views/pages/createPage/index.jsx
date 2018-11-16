import React, { Component } from 'react'
import ModuleList from './module/moduleList'
import ModuleCtrl from './module/moduleCtrl'
import ModuleWindow from './module/moduleWindow'
import './index.less'

export default class CreatePage extends Component {
	render () {
		return (
			<div className="page-create-page d-f h-full">
				<ModuleList />
				<ModuleCtrl />
				<ModuleWindow/>
			</div>
		)
	}
}
