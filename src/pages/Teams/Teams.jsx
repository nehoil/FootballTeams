import './Teams.scss';
import TeamsList from '../../cmps/TeamsList/TeamsList';
import TableLoading from '../../cmps/TableLoading/TableLoading';
import { connect } from 'react-redux';
import { useState } from 'react';
import {useSpring, animated} from 'react-spring'

function _Teams({data}) {
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(() => setIsLoading(false),1400);
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <div className="teams-container">
      <div className="teams-title">
        <div className="title-animation">
          
        </div>
      </div>
      { data.teams.length > 1 && !isLoading ?
      <animated.div style={props}>
        <TeamsList data={data}/>
      </animated.div>
        :
        
        <div className="loader-container">
        <TableLoading/>
        </div>
        }
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state,
});


export default connect(mapStateToProps, null)(_Teams);

