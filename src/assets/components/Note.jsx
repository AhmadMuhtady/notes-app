import Button from './Button';

const Note = ({ note, deleteNote }) => {
	return (
		<div
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
	);
};

export default Note;
