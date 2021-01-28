const INITAL_STATE = {
    teams: [],
    selected: [],
    term: ''
}

export function teamsReducer(state = INITAL_STATE, action) {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...action.data
            }
        case 'UPDATE_SELECTED':
            return {
                ...state,
                selected: action.newSelected
            }
        default:
            return state;
    }
}