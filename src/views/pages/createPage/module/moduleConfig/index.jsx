import React, { Component } from 'react'
import { Modal } from 'antd'
import CustomForm from 'components/customForm'
import pageServer from 'server/page'
import util from 'core/util'
import Router from 'moreact-router'
import './index.less'

export default class ModuleConfig extends Component {
	constructor (props) {
		super(props)
		this.customFormRef = React.createRef()
	}
	
	onConfirm () {
		const { pageName } = Router.current.params
		const moduleConfig = this.customFormRef.current.getValue()
		const { info = {} } = this.props
		pageServer.addModule({
			pageName,
			moduleName: info.name || '',
			moduleConfig: JSON.stringify(moduleConfig)
		}).then(() => {
			util.success('模块添加成功')
			this.closeModal()
		})
	}
	
	closeModal () {
		const { onCancel } = this.props
		onCancel && onCancel()
	}
	
	render () {
		const { visible, info = {} } = this.props
		return (
			<Modal
				visible={visible}
				title="模块配置"
				onOk={this.onConfirm.bind(this)}
				onCancel={this.closeModal.bind(this)}
				maskClosable={false}
				style={{ width: '600px', top: '50px' }}>
				<CustomForm config={info} ref={this.customFormRef} />
			</Modal>
		)
	}
}
