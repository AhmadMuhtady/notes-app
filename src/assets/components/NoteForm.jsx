import { useState } from 'react';
import Button from './Button';
import TextInputs from './inputs/TextInputs';
import SelectInput from './inputs/SelectInput';
import TextArea from './inputs/TextArea';

const NoteForm = ({ notes, setNotes }) => {
	const [formData, setFormData] = useState({
		title: '',
		priority: 'Medium',
		category: 'Work',
		description: '',
	});

	const [isFormVisible, setIsFormVisible] = useState(false);

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
		const NewNote = { id: Date.now(), ...formData };

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
		<>
			<Button
				onClick={() => setIsFormVisible(!isFormVisible)}
				className="w-full bg-gray-100 border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
			>
				{isFormVisible ? 'Hide Form ✖️' : 'Add New Note ➕'}
			</Button>

			{isFormVisible && (
				<form onSubmit={handleSubmit} className="mb-6">
					<TextInputs
						label="Title"
						name="title"
						value={formData.title}
						onchange={handleChange}
						required
					/>

					<SelectInput
						label="Priority"
						name="priority"
						value={formData.priority}
						onChange={handleChange}
						options={[
							{ value: 'High', label: '🔴 High' },
							{ value: 'Medium', label: '🟠 Medium' },
							{ value: 'Low', label: '🟢 Low' },
						]}
					/>

					<SelectInput
						label="Category"
						name="category"
						value={formData.category}
						onChange={handleChange}
						options={[
							{ value: 'Personal', label: '🏠 Personal' },
							{ value: 'Work', label: '📁 Work' },
							{ value: 'Ideas', label: '💡 Ideas' },
						]}
					/>

					<TextArea
						label="Description"
						name="description"
						value={formData.description}
						onChange={handleChange}
						required
					/>

					<Button className="w-full pg-purple-500 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600">
						Add Note
					</Button>
				</form>
			)}
		</>
	);
};

export default NoteForm;
