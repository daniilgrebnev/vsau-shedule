import axios from 'axios'

export const getGroupSchedule = async (id: string) => {
	const URL = `http://localhost:8000/api/v1/schedule/?g=${id}`
	let data = await axios.get(URL)

	// if (data.status === 200) {
	// } else {
	// 	console.error('fetch failled')
	// }
	return data.data
}
