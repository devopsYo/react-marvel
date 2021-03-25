import Header from '../header-footer/Header'
import Heroes from '../hero/Heroes'
import AddHero from '../hero/AddHero'

const Home = ({ statusAdd, onAdd, onToogleFavoriteHero, heroes, setStatusAddHero }) => {
    return (
        <>
            <Header title='Marvel Heroes'
                onAdd={() => setStatusAddHero(!statusAdd)}
                statusAdd={statusAdd} showAdd={true}/>
            {statusAdd && <AddHero onAdd={onAdd} />}
            <Heroes heroes={heroes} onToogleFavoriteHero={onToogleFavoriteHero} />
        </>
    )
}

export default Home
