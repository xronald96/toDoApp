import { useState } from 'react';
import useTodos from './hooks/useTodos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
	const [newTodo, setNewTodo] = useState('');
	const { todos, loading, error, addTodo, toggleTodo, removeTodo } = useTodos();

	const handleAdd = async (e) => {
		e.preventDefault();
		if (!newTodo.trim()) return;
		await addTodo(newTodo);
		setNewTodo('');
	};

	return (
		<ErrorBoundary>
			<div style={{ padding: 20, fontFamily: 'sans-serif' }}>
				<h1>Todo App</h1>

				<TodoForm newTodo={newTodo} setNewTodo={setNewTodo} onAdd={handleAdd} />

				{loading ? (
					<p>Loading tasks...</p>
				) : (
					<TodoList todos={todos} onToggle={toggleTodo} onDelete={removeTodo} />
				)}
				{error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
			</div>
		</ErrorBoundary>
	);
};

export default App;
