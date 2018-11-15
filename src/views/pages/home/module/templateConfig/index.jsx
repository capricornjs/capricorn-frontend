import React, { Component } from 'react'
import { Modal, Input, Select } from 'antd'
import FormWrap from 'components/formWrap'
import Router from 'moreact-router'
import util from 'core/util'
import pageServer from 'server/page'
import './index.less'

const { TextArea } = Input
const Option = Select.Option

export default class TemplateConfig extends Component {
	state = {
		title: '',
		templateId: '',
		description: ''
	}
	
	templates = []
	
	componentDidMount () {
		pageServer.queryPageTemplates().then((res) => {
			this.templates = res.list
			this.setState({})
		})
	}
	
	onConfirm () {
		pageServer.createPage(this.state).then((res) => {
			util.success('页面创建成功')
			Router.go('createPage', {
				pageName: res.data.pageName
			})
		})
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
					<Select placeholder="请选择页面模版" className="w-full" onChange={util.dataChange.bind(this, 'templateId')}>
						<For of={this.templates || []} each="item" index="index">
							<Option key={index} value={item.id}>{item.templateName}</Option>
						</For>
					</Select>
				</FormWrap>
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
