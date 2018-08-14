import React from 'react';
import NoteWrapper from './NoteWrapper';
import DeleteIcon from './DeleteIcon';

class Note extends React.PureComponent {
	handleDeleteNote = () => {
		const { id, onNoteDelete } = this.props;
		onNoteDelete(id)
	};

	render() {
		const { message } = this.props;
		return (
			<NoteWrapper>
				{message}
				<DeleteIcon
					onClick={this.handleDeleteNote}
				/>
			</NoteWrapper>
		);
	}
}

export default Note
