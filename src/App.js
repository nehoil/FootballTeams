import './assets/scss/global.scss';
import './App.scss';
import Navbar from './cmps/NavBar';
import Teams from './pages/Teams';
import Home from './pages/Home';
import { connect } from 'react-redux';
import { loadData} from './store/actions/teamsAction';

import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { useEffect } from 'react';

function _App({loadData}) {
  useEffect(() => {
    loadData()
  })
  return (
    
    <div className="App">
     <Navbar/>
     <Router>
     <Switch>
     <Route path="/teams" component={Teams}/>
     <Route path="/" component={Home}/>
     </Switch>
     </Router>

    </div>
  );
}



const mapDispatchToProps = {
  loadData
};

export default connect(null, mapDispatchToProps)(_App);


