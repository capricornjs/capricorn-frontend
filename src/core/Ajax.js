import axios from 'axios'
import BaseServer from './BaseServer'

export default class Ajax extends BaseServer {
	constructor (props) {
		super(props)
		axios.default.baseURL = 'http://127.0.0.1:3000/'
	}
	
	get (url, params = {}) {
		return axios.get(url, params)
	}
	
	post (url, params = {}) {
		return axios.post(url, params)
	}
}
