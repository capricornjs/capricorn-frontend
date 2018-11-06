import React, { Component } from 'react'
import classnames from 'classnames'
import './index.less'

export default class FormWrap extends Component {
	render () {
		const { children, label, required } = this.props
		return (
			<div className="componen-form-wrap d-f">
				<div className={classnames('label m-r-15', { 'required': required })}>{label}</div>
				<div className="form flex-1">{children}</div>
			</div>
		)
	}
}
