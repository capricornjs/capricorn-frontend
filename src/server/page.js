import Ajax from 'core/Ajax'

class ModuleServer extends Ajax {
	createPage (params) {
		return this.post('/page/create', params)
	}
	
	queryPage (params) {
		return this.get('/page/query', params)
	}
	
	addModule (params) {
		return this.post('/page/addModule', params)
	}
}

export default new ModuleServer
