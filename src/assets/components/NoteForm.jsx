import { useState } from 'react';

const NoteForm = ({ notes, setNotes }) => {
	const [formData, setFormData] = useState({
		title: '',
		priority: 'Medium',
		category: 'Work',
		description: '',
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.title || !formData.description) {
			alert('Please fill All Fields');
		}

		// create Note Object
		const NewNote = { ID: Date.now(), ...formData };

		// add note to state
		setNotes([NewNote, ...notes]);

		// reset form data
		setFormData({
			title: '',
			priority: 'Medium',
			category: 'Work',
			description: '',
		});
	};

	return (
		<form onSubmit={handleSubmit} className="mb-6">
			<div className="mb-4">
				<label htmlFor="title" className="block font-semibold">
					Title
				</label>
				<input
					name="title"
					type="text"
					className="w-full p-2 border rounded-lg"
					value={formData.title}
					onChange={handleChange}
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="title" className="block font-semibold">
					Priority
				</label>
				<select
					name="priority"
					type="text"
					className="w-full p-2 border rounded-lg"
					value={formData.priority}
					onChange={handleChange}
				>
					<option value="High">🔴 High</option>
					<option value="Medium">🟠 Medium</option>
					<option value="Low">🟢 Low</option>
				</select>
			</div>
			<div className="mb-4">
				<label htmlFor="title" className="block font-semibold">
					Category
				</label>
				<select
					name="category"
					type="text"
					className="w-full p-2 border rounded-lg"
					value={formData.category}
					onChange={handleChange}
				>
					<option value="Personal">🏠 Personal</option>
					<option value="Work">📁 Work</option>
					<option value="Ideas">💡 Ideas</option>
				</select>
			</div>
			<div className="mb-4">
				<label htmlFor="title" className="block font-semibold">
					Description
				</label>
				<textarea
					name="description"
					type="text"
					className="w-full p-2 border rounded-lg"
					value={formData.description}
					onChange={handleChange}
				></textarea>
			</div>
			<button className="w-full pg-purple-500 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600">
				Add Note
			</button>
		</form>
	);
};

export default NoteForm;
