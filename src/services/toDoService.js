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
	const { data, error } = await supabase
		.from('todos')
		.insert([{ title, done: false }])
		.select();

	if (error) throw error;
	return data[0];
};

export const updateTodoDone = async (id, done) => {
	const { error } = await supabase.from('todos').update({ done: !done }).eq('id', id);

	if (error) throw error;
};

export const deleteTodo = async (id) => {
	const { error } = await supabase.from('todos').delete().eq('id', id);

	if (error) throw error;
};
