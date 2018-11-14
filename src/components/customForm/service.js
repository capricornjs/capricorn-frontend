import Events from 'mona-events'

class Service extends Events {
	// JSON配置转Array
	translate2Array (config) {
		const res = []
		for (const i in config) {
			const item = config[i]
			if (typeof(item) === 'object') {
				item.key = i
				item.type = item.type.toLowerCase()
				res.push(item)
			}
		}
		return res
	}
}

export default new Service
