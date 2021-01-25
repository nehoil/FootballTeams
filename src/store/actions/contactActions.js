import contactService from '../../services/ContactService'

export function loadContacts(filterBy) {
    return async dispatch => {
        const contacts = await contactService.getContacts(filterBy)
        dispatch({type: 'SET_CONTACTS', contacts})
    }
}

export function removeContact(contactId) {
    console.log('contactId', contactId);
    return async dispatch => {
      try {
        await contactService.deleteContact(contactId)
        dispatch({ type: 'REMOVE_CONTACT', contactId })
      } catch (err) {
        console.log('ERROR!');
      }
    }
  }


export function updateContact(contact) {
    return async dispatch => {
      try {
        await contactService.saveContact(contact)
        dispatch({ type: 'UPDATE_CONTACT', contact })
      } catch (err) {
        console.log('ERROR!');
      }
    }
  }

export function addContact(contact) {
    return async dispatch => {
      try {
        await contactService.saveContact(contact)
        dispatch({ type: 'ADD_CONTACT', contact })
      } catch (err) {
        console.log('ERROR!');
      }
    }
  }

export function getById(id) {
    return async dispatch => {
      try {
       const contact = await contactService.getContactById(id)
        dispatch({ type: 'SET_CURR_EDIT_CONTACT', contact })
      } catch (err) {
        console.log('ERROR!');
      }
    }
  }