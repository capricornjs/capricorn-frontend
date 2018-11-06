import React, { Component } from 'react'
import moduleServer from 'server/module'
import util from 'core/util'
import { Icon } from 'antd'
import ModuleConfig from '../moduleConfig'

export default class ModuleList extends Component {
	state = {
		moduleConfigVisible: false,
		moduleConfigInfo: {}
	}
	
	UNSAFE_componentWillMount () {
		moduleServer.getModuleList().then((res) => {
			this.moduleList = res.list
			this.setState({})
		})
	}
	
	moduleList = []
	
	configModule (item) {
		this.setState({
			moduleConfigVisible: true,
			moduleConfigInfo: item
		})
	}
	
	render () {
		const { moduleConfigVisible, moduleConfigInfo } = this.state
		return (
			<div className="module-list h-full o-a">
				<For of={this.moduleList} each="item" index="index">
					<div key={index} className="module-item flex-center c-po" onClick={this.configModule.bind(this, item)}>
						<div className="flex-1">
							<p className="name">{item.name}</p>
							<p className="description text-ellipsis">{item.description}</p>
						</div>
						<Icon type="plus-circle" />
					</div>
				</For>
				<ModuleConfig info={moduleConfigInfo} visible={moduleConfigVisible} onCancel={util.toggleBool.bind(this, 'moduleConfigVisible')} />
			</div>
		)
	}
}
