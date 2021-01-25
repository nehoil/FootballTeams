import userService from '../../services/UserService'
import contactService from '../../services/ContactService'

export function loadUser() {
    return async dispatch => {
        const user = userService.getUser()
        dispatch({type: 'SET_USER', user})
    }
}

export function loadContacts() {
    return async dispatch => {
        const contacts = contactService.getContacts()
        dispatch({type: 'SET_CONTACTS', contacts})
    }
}

export function addMove(contact, amount) {
    return async dispatch => {
        const move = userService.addMove(contact, amount)
        dispatch({type: 'ADD_MOVE', move})
    }
}