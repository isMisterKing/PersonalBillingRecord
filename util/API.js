const BASE_URL = ''
export const myRequest = opt => {
	return new Promise((resolve, reject) => {
		const { url, data, method } = opt
		uni.request({
			url: BASE_URL + url,
			data: data ?? {},
			method: method ?? 'get',
			success: res => {
				resolve(res)
			}
		})
	})
}
