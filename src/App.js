import './assets/scss/global.scss';
import './App.scss';
import Navbar from './cmps/NavBar';
import Teams from './pages/Teams';
import Home from './pages/Home';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
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

export default App;
