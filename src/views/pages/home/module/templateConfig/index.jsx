import React, { Component } from 'react'
import { Modal, Input } from 'antd'
import FormWrap from 'components/formWrap'
import Router from 'moreact-router'
import util from 'core/util'
import './index.less'

const { TextArea } = Input

export default class TemplateConfig extends Component {
	state = {
		title: '',
		description: ''
	}
	
	onConfirm () {
		Router.go('createPage', this.state)
	}
	
	closeModal () {
		const { onCancel } = this.props
		onCancel && onCancel()
	}
	
	render () {
		const { visible } = this.props
		return (
			<Modal
				visible={visible}
				title="创建页面"
				onOk={this.onConfirm.bind(this)}
				onCancel={this.closeModal.bind(this)}
				maskClosable={false}
				style={{ width: '500px', top: '50px' }}>
				<FormWrap label="页面标题" required>
					<Input type="text" onChange={util.valueChange.bind(this, 'title')} maxLength={10} placeholder="页面标题（title）" />
				</FormWrap>
				<FormWrap label="页面描述" required>
					<TextArea rows={3} onChange={util.valueChange.bind(this, 'description')} maxLength={100} placeholder="页面描述（description）" />
				</FormWrap>
			</Modal>
		)
	}
}
