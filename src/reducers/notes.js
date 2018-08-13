import { cloneDeep } from 'lodash';
import { CREATE_NOTE, DELETE_NOTE } from '../constants';
const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NOTE: {
            const newState = cloneDeep(state);
            const { date, id, message } = action.note;
            newState[date][id] = message;
            return newState;
        }
        case DELETE_NOTE: {
            const newState = cloneDeep(state);
            const { noteId, date } = action.note;
            delete newState[date][noteId];
            return newState;
        }
        default:
            return state;
    }
}