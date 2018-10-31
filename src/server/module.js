import Ajax from 'core/Ajax'

class ModuleServer extends Ajax {
	getModuleList () {
		return this.get('/module/list')
	}
}

export default new ModuleServer
