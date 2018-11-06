import Events from 'mona-events'

class CreatePageService extends Events {
	config = {}
	
	addModule (module) {
		this.config.push(module)
	}
	
	setConfig (config) {
		this.config = Object.assign({}, this.config, config)
	}
	
	getConfig () {
		return this.config
	}
	
}

export default new CreatePageService
