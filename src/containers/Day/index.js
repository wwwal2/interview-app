import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuidv4';
import { createNote, deleteNote } from '../../actions';
import Note from '../Note';
import AreaWrapper from './AreaWrapper';
import DayWrapper from './DayWrapper';
import DateWrapper from './DateWrapper';
import PlusIcon from './PlusIcon';
import NotesWrapper from './NotesWrapper';

const MODE_INPUT = 'input';
const MODE_READ = 'read';

const createDateStr = date => date.format('YYYY-MM-DD');

class Day extends React.Component {
    state = {
        mode: MODE_READ,
        noteInputValue: '',
    };

    handleNoteInput = (e) => {
        this.setState({noteInputValue: e.target.value})
    };

    handleSaveNote = (e) => {
        if (e.keyCode === 13) {
            const { onCreateNote, date } = this.props;
            const { noteInputValue } = this.state;
            const note = {
                date: createDateStr(date),
                id: uuid(),
				message: noteInputValue,
            };
            this.disableInputMode();
            onCreateNote(note);
        }
    };

    handleDeleteNote = (noteId) => {
    	const { date, onDeleteNote } = this.props;
    	onDeleteNote(createDateStr(date), noteId)
	};

    enableInputMode = () => {
        this.setState({ mode: MODE_INPUT })
    };

    disableInputMode = () => {
        this.setState({
			mode: MODE_READ,
			noteInputValue: '',
		})
    };


	renderTopArea = () => {
		const { date } = this.props;
		return (
			<AreaWrapper>
                <DateWrapper>
                    {date.date()}
                </DateWrapper>
			    <PlusIcon
                    onClick={this.enableInputMode}
                />
			</AreaWrapper>
		)
	};

	renderBottomArea = () => {
	    const { mode, noteInputValue } = this.state;
	    const { notes } = this.props;
	    console.log(notes);
	    const notesList = [];
		for (let noteId in notes) {
			if (notes.hasOwnProperty(noteId)) {
				notesList.push(
					<Note
						key={noteId}
						id={noteId}
						message={notes[noteId]}
						onNoteDelete={this.handleDeleteNote}
					/>);
			}
		}
	    return (
            <AreaWrapper>
				<NotesWrapper>
					{mode === MODE_INPUT &&
						<input
							value={noteInputValue}
							onChange={this.handleNoteInput}
							onKeyDown={this.handleSaveNote}
						/>
					}
					{notesList}
				</NotesWrapper>
            </AreaWrapper>
        )
    };

	render() {
		const { date, monthNumber } = this.props;
		return (
            <DayWrapper
                current={date.month() === monthNumber}
            >

                {this.renderTopArea()}
                {this.renderBottomArea()}
            </DayWrapper>
		);
	}
};

const mapStateToProps = (state, { date }) => {
	const dateStr = createDateStr(date);
	const notes = state.notes[dateStr];
	console.log('in map', notes);
	return {
		notes,
	};
};

const mapDispatchToProps = (dispatch) => ({
    onCreateNote: note => dispatch(createNote(note)),
    onDeleteNote: (date, noteId) => dispatch(deleteNote(date, noteId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Day);
