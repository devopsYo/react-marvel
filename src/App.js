import Home from './components/home/Home'
import Heroes from './components/hero/Heroes'
import { useState } from 'react'
import NavBar from './components/components-ui/NavBar'
import SearchBar from './components/components-ui/SearchBar'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


const App = () => {
  const [showAddHero, setShowAddHero] = useState(false)

  const [heroes, setHeroes] = useState(
    localStorage.heroes ? JSON.parse(localStorage.heroes) : []
  )

  const addHero = (hero) => {
    const id = heroes.length + 1
    const newHero = { id, ...hero }
    setHeroes([...heroes, newHero])
    localStorage.setItem('heroes', JSON.stringify([...heroes, newHero]))
  }

  const toogleFavoriteHero = (id) => {
    setHeroes(heroes.map((hero) => hero.id === id
      ? { ...hero, isFavorite: !hero.isFavorite }
      : hero
    ))
  }

  const updateHero = (id, heroFromServer) => {
    console.log(heroFromServer)
    setHeroes(heroes.map((hero) => hero.id === id
      ? {
        ...hero,
        description: heroFromServer.description,
        imageUrl: `${heroFromServer.thumbnail.path}/portrait_xlarge.${heroFromServer.thumbnail.extension}`
      } : hero
    ))
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
          <SearchBar onAdd={addHero} />
          <div className='container'>          
            <Route path='/'
              exact
              render={() => (
                <Redirect to="/home" />
              )} />
            <Route path='/home'
              exact
              render={() => (
                <Home showAdd={showAddHero}                     
                      onAdd={addHero} 
                      onToogleFavoriteHero={toogleFavoriteHero} 
                      heroes={heroes} 
                      setShowAddHero={setShowAddHero}/>
              )} />
            <Route path='/favorites'
              exact
              render={() => (
                <Heroes heroes={getFavoritesHeroes()} onToogleFavoriteHero={toogleFavoriteHero}  />
              )} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
