import { Notification } from 'mor-design'

class Util {
	error (msg) {
		Notification.config({
			title: msg,
			type: 'error',
			duration: 2000
		})
	}
	
	success (msg) {
		Notification.config({
			title: msg,
			type: 'success',
			duration: 2000
		})
	}
	
	info (msg) {
		Notification.config({
			title: msg,
			type: 'info',
			duration: 2000
		})
	}
}

export default new Util
