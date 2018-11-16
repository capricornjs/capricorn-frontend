import React, { Component } from 'react'
import pageServer from 'server/page'
import Router from 'moreact-router'
import util from 'core/util'
import './index.less'

export default class ModuleCtrl extends Component {
	componentDidMount () {
		this.pageName = Router.current.params.pageName || ''
		this.getModules()
		pageServer.on('refreshModuleList', this.getModules.bind(this))
	}
	
	modules = []
	
	getModules () {
		pageServer.queryModuleByPageName({ pageName: this.pageName }).then((res) => {
			this.modules = res.list || []
			this.setState({})
		})
	}
	
	generateView () {
		const idList = []
		this.modules.forEach((item) => {
			idList.push(item.id)
		})
		pageServer.generateView({
			pageName: this.pageName,
			idList
		}).then((res) => {
			util.success(res.msg)
		})
	}
	
	render () {
		return (
			<div className="module-ctrl">
				<div className="wrap o-a">
					<For of={this.modules} each="item" index="index">
						<div className="module-item" key={index}>{item.moduleName}</div>
					</For>
				</div>
				<div className="option flex-center" onClick={this.generateView.bind(this)}>渲染</div>
			</div>
		)
	}
}
