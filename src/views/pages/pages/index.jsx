import React, { Component } from 'react'
import pageServer from 'server/page'
import Router from 'moreact-router'
import './index.less'

const Link = Router.link

export default class Pages extends Component {
	componentDidMount () {
		pageServer.queryAllPages().then((res) => {
			this.list = res.list
			this.setState({})
		})
	}
	
	list = []
	
	render () {
		return (
			<div className="page-pages d-f">
				<For of={this.list || []} each="item" index="index">
					<Link to={`createPage?pageName=${item.pageName}`} key={index} className="page-item">
						<div>{item.pageTitle}</div>
						<div>{item.pageName}</div>
						<div>{item.pageDescription}</div>
					</Link>
				</For>
			</div>
		)
	}
}
