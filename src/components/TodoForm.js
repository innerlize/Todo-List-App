import React, { useState } from 'react';
import { TodoTaskContainer } from './TodoTaskContainer.js';

export function TodoForm({props, todos, createTask, deleteTask}) {
	const [value, setValue] = useState('');

	function handleClick(e) {
		e.preventDefault();
		if(!value) { return };
		createTask(value);
		setValue('');
	}

	return(
		<form onSubmit={handleClick}>
			<input className='w-2/4 px-5 py-1.5 text-[#222222] text-left sm:w-72' type="text" value={value} onChange={e => setValue(e.target.value)} />
			<input className='px-5 py-1.5 bg-[#1c94d9] duration-150 cursor-pointer hover:bg-[#0081e7]' type="submit" value='Add' />

			<TodoTaskContainer props={props} todos={todos} deleteTask={deleteTask} />
		</form>
	)
}