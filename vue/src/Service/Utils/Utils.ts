import Store from "@/Store";
import axios, { AxiosRequestConfig, Method, RawAxiosRequestHeaders } from "axios";
import { ResponseDataInterface } from "./ResponseDataInterface";

class Utils {
	async fetchData<T = any>(
		method: Method = 'GET',
		state: string|null = 'get', 
		target: string|null = null, 
		payload: object = {},
		url: string = process.env.VUE_APP_BACKEND_URL_API,
		authHeaderToken: any|object|null = null
	): Promise<ResponseDataInterface<T>> {
		let _url: string = `${url}${state ? `/${state}` : '' }/${target}`;
		if(target == null) {
			_url = url;
		}
		const _headers: Partial<RawAxiosRequestHeaders> = Object.assign({}, axios.defaults.headers.common); /// copy object without link to object

		/* const authData = (Store.state.authorization as StateInterface);
		const isLoggedIn = !!authData.token; */

		/* if(isLoggedIn) {
			if(authHeaderToken !== null) {
				for (const key in authHeaderToken) {
					if (Object.prototype.hasOwnProperty.call(authHeaderToken, key)) {
						const element = authHeaderToken[key];

						_headers[key] = element;
					}
				}
			} else {
				_headers.Authorization = `Bearer ${authData.token}`; // jwt token init request
			}
		} */

		const setup: AxiosRequestConfig = {
			method: method,
			url: _url,
			headers: _headers,
		};

		if(method.toLowerCase() === 'get') {
			setup.params = payload;
		} else {
			setup.data = payload;
		}

		return await axios.request(setup) as ResponseDataInterface<T>;
	}

	/**
	 * Declines words by numerical value
	 * 
	 * @param {number} value number 
	 * @param {array} words array
	 * 
	 * @returns {string} string
	 */
	numWord(value: number, words: Array<string>): string {  
		value = Math.abs(value) % 100; 
		let num = value % 10;
		if(value > 10 && value < 20) return words[2]; 
		if(num > 1 && num < 5) return words[1];
		if(num === 1) return words[0]; 
		return words[2];
	}

	/**
	 * converts a string to camel case
	 * 
	 * @param {string} str 
	 * 
	 * @returns {string}
	 */
	toCamelCase(str: string): string {
		return str.replace(/([-_][A-Z])/ig, ($1) => {
			return $1.toUpperCase().replace('-', '').replace('_', '').replace(/ /gi, '')
		}).replace(/ /gi, '').replace('_', '').replace('-', '').replace(/^./, c => c.toUpperCase());
	}

	/**
	 * converts a string to snake case
	 * 
	 * @param {string} str 
	 * 
	 * @returns {string}
	 */
	toSnakeCase(str: string): string {
		return str.replace(/([-_][A-Z])/ig, ($1) => {
			return $1.toLowerCase().replace('-', '_').replace(/ /gi, '_')
		})
	}
}
export default new Utils();