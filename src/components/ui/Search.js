import React, { useState } from 'react'

export default function Search({ getQuery }) {
	const [text, setText] = useState('')

	function onChange(q) {
		setText(q)
		getQuery(q)
	}
	return (
		<section className='search'>
			<form>
				<input
					type='text'
					className='form-control'
					placeholder='Search characters'
					value={text}
					autoFocus
					onChange={function (e) {
						onChange(e.target.value)
					}}
				/>
			</form>
		</section>
	)
}
