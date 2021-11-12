import React from 'react'
import { addTask } from '../../fetch'

function AddTask() {
	React.useEffect(() => {
		const payload = {
			name: 'Jason'
		}
		addTask(payload)
	}, [])
	return <h1>Hello World</h1>
}

export default AddTask
