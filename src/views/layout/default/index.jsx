import React, { Component } from 'react'
import Header from './header/index'

export default class DefaultLayout extends Component {
	render () {
		/*eslint-disable*/
		const { children } = this.props
		/*eslint-disable*/
		return (
			<div className="page-wrapper">
				<Header />
				<div className="page-wrapper-content">
					{children}
				</div>
			</div>
		)
	}
}
