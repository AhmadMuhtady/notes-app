import Note from './Note';
import Button from './Button';

const NotesList = ({ notes, deleteNote, isNoteVisible, setIsNoteVisible }) => {
	if (notes.length === 0) {
		return <p className="text-center text-gray-500">No Notes Yet</p>;
	}

	return (
		<>
			<Button
				onClick={() => setIsNoteVisible(!isNoteVisible)}
				className="w-full bg-gray-100 border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
			>
				{isNoteVisible ? 'Hide Notes 🕶️' : 'View Note 👀'}
			</Button>
			{isNoteVisible && (
				<div className="space-y-4">
					{notes.map((note) => (
						<Note key={note.id} note={note} deleteNote={deleteNote} />
					))}
				</div>
			)}
		</>
	);
};

export default NotesList;
