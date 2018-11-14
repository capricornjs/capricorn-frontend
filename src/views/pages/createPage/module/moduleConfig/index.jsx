import React, { Component } from 'react'
import { Modal } from 'antd'
import CustomForm from 'components/customForm'
import './index.less'

export default class ModuleConfig extends Component {
	constructor (props) {
		super(props)
		this.customFormRef = React.createRef()
	}
	
	onConfirm () {
		console.log(this.customFormRef.current.getValue())
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
