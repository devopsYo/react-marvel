import Home from './components/home/Home'
import Favorites from './components/favorites/Favorites'
import { useState } from 'react'
import NavBar from './components/components-ui/NavBar'
import SearchBar from './components/components-ui/SearchBar'

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'


const App = () => {

  const [heroes, setHeroes] = useState(
    localStorage.heroes ? JSON.parse(localStorage.heroes) : []
  )

  const toogleFavoriteHero = (id) => {
    let listHeroes = heroes.map((hero) => hero.id === id ? { ...hero, isFavorite: !hero.isFavorite } : hero)
    setHeroes(listHeroes)
    localStorage.setItem('heroes', JSON.stringify([...listHeroes]))
  }

  const countFavoritesHeroes = () => {
    return heroes.filter((hero) => hero.isFavorite).length
  }

  const getFavoritesHeroes = () => {
    return heroes.filter((hero) => hero.isFavorite)
  }

  return (
    <Router>
      <div>
        <NavBar countFavoritesHeroes={countFavoritesHeroes} />
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
                  <Home onToogleFavoriteHero={toogleFavoriteHero} />
                )} />
              <Route path='/favorites'
                render={() => (
                  <Favorites heroes={getFavoritesHeroes()} onToogleFavoriteHero={toogleFavoriteHero} />
                )} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
