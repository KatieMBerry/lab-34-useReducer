export const initialState = {
    current: '#FF0000',
    undo: [],//before
    redo: []//after
};

// let state = initialState;

export function reducer(state, action) {
    switch (action.type) {
        case 'current':
            return {
                ...state,
                undo: [...state.undo, state.current],
                current: action.payload
            };
        case 'undo':
            return {
                ...state,
                undo: [state.undo.slice(0, -1)],
                redo: [state.current, ...state.redo],
                current: state.undo[state.undo.length - 1] || ['#FFF00']
            };
        case 'redo':
            return {
                ...state,
                undo: [...state.undo, state.current],
                current: state.redo[0],
                redo: state.redo.slice(-1)
            };

        default:
            return state;
    }
}
