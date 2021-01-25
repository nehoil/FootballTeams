import './Teams.scss';
import { TeamService } from '../../services/TeamsService';
import { useEffect, useState } from 'react';
import TeamsList from '../../cmps/TeamsList/TeamsList';
import TableLoading from '../../cmps/TableLoading/TableLoading';

export default function Teams() {
  const [data, setData] = useState([]);
  async function loadTeams() {
    const data = await TeamService.getTeams();
    setData(data);
    console.log(data);
  }
  function updateSelected(selected) {
    TeamService.updateSelected(selected)
  }
  useEffect(() => {
    loadTeams();
  });
  return (
    <div className="teams-container">
      { data.teams ?
        <TeamsList data={data} selectedChange={updateSelected} />
        :
        <div className="loader-container">
        <TableLoading/>
        </div>
        }
    </div>
  );
}
