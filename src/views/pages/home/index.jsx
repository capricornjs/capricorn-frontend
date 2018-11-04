import React, { Component } from 'react'
import './index.less'
import Router from 'moreact-router'

const Link = Router.link

export default class Home extends Component {
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
		return (
			<div className="page-home d-f module-list">
				<For of={this.menus} each="item" index="index">
					<Link to={item.url} key={index} className="menu-item">
						{item.name}
					</Link>
				</For>
			</div>
		)
	}
}
