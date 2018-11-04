import React, { Component } from 'react'
import valuesData from 'data/values'
import Router from 'moreact-router'

const Link = Router.link

export default class Header extends Component {
	render () {
		return (
			<div className="page-nav flex-center">
				<div className="page-nav-main d-f">`
					<div className="page-nav-left flex-center-y">
						<Link to="">
							<div className="page-nav-logo flex-center-y">
								<img src={valuesData.logo} />{valuesData.title}
							</div>
						</Link>
					</div>
					<div className="page-nav-right flex-right-x flex-1 flex-center-y"></div>
				</div>
			</div>
		)
	}
}
