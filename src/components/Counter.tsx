import { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
	const [counter, setCounter] = useState(0)

	const inc = () => {
		setCounter(counter + 1)
	}

	return (
		<div>
			<div className={classes.green}> {counter}</div>
			<button className={classes.btn} onClick={inc}>
				{counter}
			</button>

			<img src='../assets/1.png' alt='' />
		</div>
	)
}
