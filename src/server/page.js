import Ajax from 'core/Ajax'

class ModuleServer extends Ajax {
	createPage (params) {
		return this.post('/page/createPage', params)
	}
	
	queryPageTemplates() {
		return this.get('/template/queryPageTemplates')
	}
	
	queryPage (params) {
		return this.get('/page/queryPage', params)
	}
	
	queryAllPages (params) {
		return this.get('/page/queryAllPages', params)
	}
	
	queryModuleByPageName (params) {
		return this.get('/page/queryModuleByPageName', params)
	}
	
	addModule (params) {
		return this.post('/page/addModule', params).then((res) => {
			this.emit('refreshModuleList')
			return res
		})
	}
	
	generateView (params) {
		return this.post('/page/generateView', params)
	}
}

export default new ModuleServer
