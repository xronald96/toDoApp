const TodoList = ({ todos, onToggle, onDelete }) => {
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>
					<input
						type='checkbox'
						checked={todo.done}
						onChange={() => onToggle(todo.id, todo.done)}
					/>
					<span style={{ textDecoration: todo.done ? 'line-through' : '' }}>
						{todo.title}
					</span>
					<button onClick={() => onDelete(todo.id)}>Delete</button>
				</li>
			))}
		</ul>
	);
};

export default TodoList;
