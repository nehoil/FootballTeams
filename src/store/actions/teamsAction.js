import { TeamService } from '../../services/TeamsService';

export function loadData() {
    return async (dispatch, getStore) => {
        const data = await TeamService.getTeams(getStore().term)        
        dispatch({type: 'SET_DATA', data})
    }
}

export function updateSelected(selected) {
    return async dispatch => {
        await TeamService.updateSelected(selected)
        dispatch({type: 'UPDATE_SELECTED', newSelected: selected})
    }
}

export function removeSelected(selected) {
    return async (dispatch, state) => {        
        const newSelected = state().selected.filter((idx)=>idx !== selected)
        await TeamService.updateSelected(newSelected)       
        dispatch({type: 'UPDATE_SELECTED', newSelected})
    }
}

export function addSelected(selected) {
    return async (dispatch, state) => {        
        const newSelected = [...state().selected, selected]
        await TeamService.updateSelected(newSelected)       
        dispatch({type: 'UPDATE_SELECTED', newSelected})
    }
}