import { AxiosResponse } from "axios"

export interface ResponseDataInterface<T = any> extends AxiosResponse {
	data: {
		count: number|undefined
		data: T
	}
}