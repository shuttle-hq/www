import { BUTTONDOWN_API_KEY } from 'lib/constants'

export default function useButtondown() {
	const API_URL = 'https://api.buttondown.email/v1/subscribers'

	const addSubscriber = async (email: string) => {
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${BUTTONDOWN_API_KEY}`,
			},
			body: JSON.stringify({ email }),
		}

		try {
			const response = await fetch(API_URL, requestOptions)
			const data = await response.json()

			// 400 BAD REQUEST buttondown sends an array with a string message
			if (response.status === 400) {
				return Promise.reject({
					// buttondown api puts error messages as first string in an array
					data: data[0],
					status: response.status,
				})
			}

			// 201 CREATED buttondown sends this as success message
			else if (response.status === 201) {
				return Promise.resolve({
					data,
					status: response.status,
				})
			}

			// I have not identified the response
			else {
				console.error('UNKNOWN RESPONSE')
				return Promise.reject({
					status: response.status,
				})
			}
		} catch (err) {
			console.log(err)
			throw err
		}
	}

	return { addSubscriber }
}
