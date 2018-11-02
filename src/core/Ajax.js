import axios from 'axios'
import BaseServer from './BaseServer'
import { Toast } from 'mor-design'

export default class Ajax extends BaseServer {
	constructor (props) {
		super(props)
		axios.default.baseURL = 'http://127.0.0.1:3000/'
		this.filter()
	}
	
	get (url, params = {}) {
		return axios.get(url, params)
	}
	
	post (url, params = {}) {
		return axios.post(url, params)
	}
	
	filter () {
		this.handleResponse()
	}
	
	handleResponse () {
		axios.interceptors.response.use((response) => {
			if (response.status === 200) {
				return response.data || {}
			}
		}, (error) => {
			Toast.config({
				title: '网络异常',
				type: 'error',
				duration: 2000
			})
			return Promise.reject(error)
		})
	}
}
