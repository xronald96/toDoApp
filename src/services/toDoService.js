import { supabase } from '../supabase';

export const fetchTodos = async () => {
	const { data, error } = await supabase
		.from('todos')
		.select('*')
		.order('created_at', { ascending: false });

	if (error) throw error;
	return data || [];
};

export const insertTodo = async (title) => {
	if (typeof title !== 'string' || title.trim() === '') {
		throw new Error('insertTodo: title is required and must be a non-empty string.');
	}

	const { data, error } = await supabase
		.from('todos')
		.insert([{ title: title.trim(), done: false }])
		.select();

	if (error) throw error;
	return data[0];
};

export const updateTodoDone = async (id, done) => {
	if (!id) {
		throw new Error('updateTodoDone: id is required.');
	}
	if (typeof done !== 'boolean') {
		throw new Error('updateTodoDone: done must be a boolean.');
	}

	const { error } = await supabase.from('todos').update({ done: !done }).eq('id', id);

	if (error) throw error;
};

export const deleteTodo = async (id) => {
	if (!id) {
		throw new Error('deleteTodo: id is required.');
	}

	const { error } = await supabase.from('todos').delete().eq('id', id);

	if (error) throw error;
};
