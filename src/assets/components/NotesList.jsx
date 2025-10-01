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
						<div
							key={note.id}
							className="p-4 bg-white rounded-lg shadow border-l-4"
							style={{
								borderLeftColor:
									note.priority === 'High'
										? 'red'
										: note.priority === 'Medium'
										? 'orange'
										: 'green',
							}}
						>
							<h3 className="text-lg font-bold">{note.title}</h3>
							<p className="text-sm text-gray-600">
								<strong>Category: </strong>
								{note.category}
							</p>
							<p className="text-sm text-gray-600">
								<strong>Priority: </strong>
								{note.priority}
							</p>
							<p className="mt-2">
								<strong>Description: </strong>
								{note.description}
							</p>
							<Button
								onClick={() => deleteNote(note.id)}
								className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700"
							>
								🗑️ Delete
							</Button>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default NotesList;
