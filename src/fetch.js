export async function addTask(data) {
	// eslint-disable-next-line no-console
	console.log({ data })
	const url = `${process.env.REACT_APP_API_URL}/add`

	const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(data)
	})
	return response.json()
}
