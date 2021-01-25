const INITAL_STATE = {
    contacts: []
}

export function contactReducer(state = INITAL_STATE, action) {
    switch (action.type) {
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: action.contacts
            }
        case 'SET_CURR_EDIT_CONTACT':
            return {
                ...state,
                currEditContact: action.contact
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.contact]
            }
        case 'REMOVE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.contactId)
            }
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(contact => contact._id ? action.contact : contact)
            }
        default:
            return state;
    }
}