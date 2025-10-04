import { useState, useEffect } from 'react';
import NoteForm from './assets/components/NoteForm';
import NotesList from './assets/components/NotesList';

function App() {
	const [notes, setNotes] = useState(() => {
		const notes = JSON.parse(localStorage.getItem('notes'));

		return notes || [];
	});
	const [isNoteVisible, setIsNoteVisible] = useState(true);
	const [isFormVisible, setIsFormVisible] = useState(false);

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes));
	}, [notes]);

	const deleteNote = (id) => {
		const confirm = window.confirm('Are you sure you want to delete Note');
		if (confirm) {
			setNotes(notes.filter((note) => note.id !== id));
		}
	};

	return (
		<div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
			<h2 className="text-2xl font-bold mb-4 text-center">📝 Notes App</h2>
			<NoteForm
				notes={notes}
				setNotes={setNotes}
				isFormVisible={isFormVisible}
				setIsFormVisible={setIsFormVisible}
			/>
			<NotesList
				notes={notes}
				deleteNote={deleteNote}
				isNoteVisible={isNoteVisible}
				setIsNoteVisible={setIsNoteVisible}
			/>
		</div>
	);
}

export default App;
