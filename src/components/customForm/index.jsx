import React, { Component } from 'react'
import service from './service'
import Item from './item'
import './index.less'

export default class CustomForm extends Component {
	constructor (props) {
		super()
		const { configDeclare } = props.config
		if (configDeclare) {
			this.config = JSON.parse(configDeclare)
			this.forms = service.translate2Array(this.config)
		}
	}
	
	receiveFormData (key, value) {
		this.config[key].value = value
	}
	
	getValue () {
		return this.config
	}
	
	config = {}
	forms = []
	
	render () {
		return (
			<div className="componen-custom-form">
				<For of={this.forms} each="item" index="index">
					<Item config={item} key={index} receiveFormData={this.receiveFormData.bind(this)} />
				</For>
			</div>
		)
	}
}
