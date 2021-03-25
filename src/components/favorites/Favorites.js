import Header from '../header-footer/Header'
import Heroes from '../hero/Heroes'

const Favorites = ({ onToogleFavoriteHero, heroes }) => {
    return (
        <>
            <Header title='Favorites Marvel Heroes'
               showAdd={false}/>            
            <Heroes heroes={heroes} onToogleFavoriteHero={onToogleFavoriteHero} />
        </>
    )
}

export default Favorites
