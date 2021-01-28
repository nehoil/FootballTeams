
import axios from 'axios'
import { storageService } from "./StorageService"


const TEAMS_STORAGE_KEY = 'TEAMS_DB'

const gTeams = storageService.load(TEAMS_STORAGE_KEY) || _loadTeams()

export const TeamService = {
    getTeams,
    updateSelected
}

async function getTeams(term){
    return gTeams
}

async function updateSelected(selected) {
    const currTeams = await gTeams
    currTeams.selected = selected
    storageService.store(TEAMS_STORAGE_KEY, currTeams)
}


async function _loadTeams() {
    const options = {
        method: 'GET',
        url: 'https://api.football-data.org/v2/teams',
        headers: {
            'X-Auth-Token': '9eea371f10314be4b12a488c91b08fc0'
        }
    };
    try {
        var res = await axios.request(options)
        const teams = res.data.teams.reduce((acc, team, idx) => {
            team.key = idx;
            acc.push(team);
            return acc;
          }, []);
        const data = {
            teams,
            selected: []
        }
        storageService.store(TEAMS_STORAGE_KEY, data)
        return data
    } catch (e) {
        console.log('error while getting data from server: ', e);
    }
}