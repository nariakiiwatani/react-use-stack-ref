
import React, { useState, useCallback, ChangeEvent } from 'react'
import { useStackRef } from 'react-use-stack-ref'

const App = (props: {}) => {
	const stack = useStackRef()
	const [input, setInput] = useState("")
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value)
	}
	const handlePush = useCallback(e => {
		stack.push(input)
		setInput("")
	}, [stack])
	const handlePop = useCallback(e => {
		const value = stack.pop()
		value && setInput(value as string)
	}, [stack])
	return (<>
		<h1>live demo for useStackRef</h1>
		<input type="text" value={input} onChange={handleChange} />
		<button onClick={handlePush} disabled={input.length === 0}>push</button>
		<button onClick={handlePop} disabled={stack.size === 0} >pop</button>
		<div>current value: {stack.value}</div>
		<div>stack depth: {stack.size}</div>
	</>)
}

export default App;
