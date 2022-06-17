import React, { useState } from 'react';
import { TodoTitle } from './TodoTitle.js';
import { TodoForm } from './TodoForm.js';

export function TodoMain(props) {
	const [todos, setTodos] = useState([]);

	function createTask(task) {
		const newTodos = [... todos, { task }];

		setTodos(newTodos);

		console.log(newTodos);
	}

	function deleteTask(index) {
		const newTodos = [... todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	}

	return <>
		<TodoTitle />
		<TodoForm props={props} todos={[... todos]} createTask={createTask} deleteTask={deleteTask} />
	</>
}