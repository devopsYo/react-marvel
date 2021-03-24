import Header from '../header-footer/Header'
import Heroes from '../hero/Heroes'
import AddHero from '../hero/AddHero'

const Home = ({ showAdd, onAdd, onToogleFavoriteHero, heroes, setShowAddHero }) => {
    return (
        <>
            <Header title='Marvel Heroes'
                onAdd={() => setShowAddHero(!showAdd)}
                showAdd={showAdd} />
            {showAdd && <AddHero onAdd={onAdd} />}
            <Heroes heroes={heroes} onToogleFavoriteHero={onToogleFavoriteHero} />
        </>
    )
}

export default Home
