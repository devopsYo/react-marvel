import Header from '../header-footer/Header'
import Heroes from '../hero/Heroes'
import {useSelector} from 'react-redux'
 
const Favorites = () => {
    const heroes = useSelector(state => state.heroes)
    const getFavoritesHeroes = heroes.filter((hero) => hero.isFavorite)

    return (
        <>
            <Header title='Favorites Marvel Heroes'
               showAdd={false}/>            
            <Heroes heroes={getFavoritesHeroes} />
        </>
    )
}

export default Favorites
