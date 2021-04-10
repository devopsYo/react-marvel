import Home from './components/home/Home'
import Favorites from './components/favorites/Favorites'
import NavBar from './components/components-ui/NavBar'
import SearchBar from './components/components-ui/SearchBar'

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'


const App = () => {

  return (
    <Router>
      <div>
        <NavBar />
        <div className='app'>
          <SearchBar />
          <div className='container'>
            <Switch>
              <Route path='/'
                exact
                render={() => (
                  <Redirect to="/home" />
                )} />
              <Route path='/home'
                exact
                render={() => (
                  <Home />
                )} />
              <Route path='/favorites'
                render={() => (
                  <Favorites />
                )} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
