import axios from 'axios'
import qs from 'qs'
import BaseServer from './BaseServer'
import util from './util'

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
		return this.ajax.get(url, {
			params: qs.stringify(params)
		})
	}
	
	post (url, params = {}) {
		return this.ajax.post(url, qs.stringify(params))
	}
	
	filter () {
		this.handleResponse()
	}
	
	handleResponse () {
		this.ajax.interceptors.response.use((response) => {
			if (response.status !== 200 || !response.data) {
				util.error('接口请求异常')
				return Promise.reject(response)
			}
			if (response.data.code !== 200) {
				util.error(response.data.msg || '接口请求失败')
				return Promise.reject(response.data)
			}
			return response.data
		}, (error) => {
			util.error('网络异常')
			return Promise.reject(error)
		})
	}
}
