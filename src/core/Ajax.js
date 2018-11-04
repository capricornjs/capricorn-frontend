import axios from 'axios'
import BaseServer from './BaseServer'
import { Toast } from 'mor-design'

export default class Ajax extends BaseServer {
	constructor (props) {
		super(props)
		this.ajax = axios.create({
			baseURL: 'http://127.0.0.1:3000/',
			withCredentials: false,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
		})
		this.filter()
	}
	
	get (url, params = {}) {
		return this.ajax.get(url, params)
	}
	
	post (url, params = {}) {
		return this.ajax.post(url, params)
	}
	
	filter () {
		this.handleResponse()
	}
	
	handleResponse () {
		this.ajax.interceptors.response.use((response) => {
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
