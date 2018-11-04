import React, { Component } from 'react'
import moduleServer from 'server/module'
import { Icon } from 'mor-design'

export default class ModuleList extends Component {
	UNSAFE_componentWillMount () {
		moduleServer.getModuleList().then((res) => {
			this.moduleList = res.list
			this.setState({})
		})
	}
	
	moduleList = []
	
	render () {
		return (
			<div className="module-list h-full o-a">
				<For of={this.moduleList} each="item" index="index">
					<div key={index} className="module-item flex-center c-po">
						<div className="flex-1">
							<p className="name">{item.name}</p>
							<p className="description text-ellipsis">{item.description}</p>
						</div>
						<Icon name="plus" />
					</div>
				</For>
			</div>
		)
	}
}
