import { useEffect, useState } from 'react';
import { fetchTodos, insertTodo, updateTodoDone, deleteTodo } from '../services/toDoService';

const useTodos = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		loadTodos();
	}, []);

	const loadTodos = async () => {
		setLoading(true);
		try {
			const data = await fetchTodos();
			setTodos(data);
		} catch (err) {
			setError(err);
			console.error('Error fetching todos:', err);
		} finally {
			setLoading(false);
		}
	};

	const addTodo = async (title) => {
		try {
			const todo = await insertTodo(title);
			setTodos([todo, ...todos]);
		} catch (err) {
			setError(err);
		}
	};

	const toggleTodo = async (id, done) => {
		try {
			await updateTodoDone(id, done);
			setTodos(todos.map((t) => (t.id === id ? { ...t, done: !done } : t)));
		} catch (err) {
			setError(err);
		}
	};

	const removeTodo = async (id) => {
		try {
			await deleteTodo(id);
			setTodos(todos.filter((t) => t.id !== id));
		} catch (err) {
			setError(err);
		}
	};

	return {
		todos,
		loading,
		error,
		addTodo,
		toggleTodo,
		removeTodo,
	};
};

export default useTodos;
