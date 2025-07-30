const TodoForm = ({ newTodo, setNewTodo, onAdd }) => {
	return (
		<form onSubmit={onAdd}>
			<input
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
				placeholder='New task'
			/>
			<button>Add</button>
		</form>
	);
};

export default TodoForm;
