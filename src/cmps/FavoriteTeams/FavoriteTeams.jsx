
import './FavoriteTeams.scss'
import { useState } from 'react';
import { connect } from 'react-redux';
import { updateSelected, removeSelected } from '../../store/actions/teamsAction';
import {
  CloseOutlined
} from '@ant-design/icons';


function _FavoriteTeams({state, removeSelected}) {
  const [isShow, setisShow] = useState(false)
  const teamsListClass = isShow ? 'favorite-teams show' : 'favorite-teams'
  function removeTeam(idx) {
    removeSelected(idx)
  }
  return ( <div className="favorite-teams-container">
      <div className="favorite-btn" onClick={()=>setisShow(!isShow)}>
          <div className="favorite-btn-txt">
            Favorite
          </div>
          {
            state.selected && state.selected.length > 0 &&
            <div className="favorite-btn-count">
               {state.selected.length}
          </div>
          }
        </div>
        <div className={teamsListClass} >
          <h3>My Favorite Teams</h3>
          {
            state.selected && 
            state.selected.map((teamIdx)=>{
              const team = state.teams[teamIdx]
              return (
                <ul key={teamIdx}>
                  <li>
                  <img src={team.crestUrl} alt="" />
                  </li>
                  <li>{team.shortName}</li>
                  <li className="remove-btn" onClick={()=>removeTeam(teamIdx)}><CloseOutlined /></li>
                </ul>
              )
            })
          }
        </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
 state,
});

const mapDispatchToProps = {
  updateSelected,
  removeSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(_FavoriteTeams);

