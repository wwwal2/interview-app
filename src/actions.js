import { CREATE_NOTE, DELETE_NOTE } from './constants';

export const createNote = note => ({
    type: CREATE_NOTE,
    note,
});

export const deleteNote = (date, noteId) => ({
    type: DELETE_NOTE,
    noteId,
    date,
});
