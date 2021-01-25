const INITAL_STATE = {
    user: {
        name: '',
        gender: '',
        email: '',
        phone: '',
        adjType: '',
        step: 0
    }
}

export function userReducer(state = INITAL_STATE, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'FINISH_STEP_1':
            return {
                ...state,
                user: {
                    ...state.user,
                    step: 1 
                }
            }
        case 'FINISH_STEP_2':
            return {
                ...state,
                user: {
                    ...state.user,
                    step: 2
                }
            }
        case 'FINISH_STEP_3':
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.values.user,
                    step: 3
                }
            }
        // case 'LOAD_CONTACTS':
        //     return {
        //         ...state,
        //         contacts: action.contacts
        //     }
        // case 'ADD_MOVE':
        //     return {
        //         ...state,
        //         user: {
        //             moves: [...state.user.moves, action.move]
        //         }
        //     }    
        default:
            return state;
    }
}