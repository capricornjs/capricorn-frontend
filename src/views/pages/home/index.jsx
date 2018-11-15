import React, { Component } from 'react'
import Router from 'moreact-router'
import TemplateConfig from './module/templateConfig'
import util from 'core/util'
import './index.less'

const Link = Router.link

export default class Home extends Component {
	state = {
		templateConfigVisible: false
	}
	
	menus = [{
		name: '模块管理',
		url: 'modules'
		
	}, {
		name: '模版管理',
		url: 'templates'
	}, {
		name: '创建页面',
		url: 'createPage'
	}]
	
	render () {
		const { templateConfigVisible } = this.state
		return (
			<div className="page-home d-f module-list">
				<Link to="modules" className="menu-item">模块管理</Link>
				<Link to="templates" className="menu-item">模版管理</Link>
				<div onClick={util.toggleBool.bind(this, 'templateConfigVisible')} className="menu-item">创建页面</div>
				<If condition={templateConfigVisible}>
					<TemplateConfig visible={templateConfigVisible} onCancel={util.toggleBool.bind(this, 'templateConfigVisible')} />
				</If>
			</div>
		)
	}
}
