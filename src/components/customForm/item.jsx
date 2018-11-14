import React, { Component } from 'react'
import FormWrap from '../formWrap'
import { Input, InputNumber, Switch } from 'antd'
import './item.less'

const { TextArea } = Input

export default class CustomFormItem extends Component {
	config = this.props.config
	
	setStringValue (e) {
		const { value } = e.target
		const { receiveFormData } = this.props
		receiveFormData && receiveFormData(this.config.key, value)
	}
	
	setNumberValue (value) {
		const { receiveFormData } = this.props
		receiveFormData && receiveFormData(this.config.key, value)
	}
	
	setBooleanValue (value) {
		const { receiveFormData } = this.props
		receiveFormData && receiveFormData(this.config.key, value)
	}
	
	render () {
		const { value, name, type } = this.config
		return (
			<FormWrap label={name}>
				<If condition={type === 'string'}>
					<TextArea
						defaultValue={value}
						autosize={{ minRows: 2, maxRows: 6 }}
						onChange={this.setStringValue.bind(this)}
					/>
				</If>
				<If condition={type === 'number'}>
					<InputNumber className="w-full" defaultValue={value} onChange={this.setNumberValue.bind(this)} />
				</If>
				<If condition={type === 'boolean'}>
					<Switch checkedChildren="是" unCheckedChildren="否" defaultChecked={value} onChange={this.setBooleanValue.bind(this)} />
				</If>
			</FormWrap>
		
		)
	}
}
