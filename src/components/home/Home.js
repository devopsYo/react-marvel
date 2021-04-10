import Header from '../header-footer/Header'
import Heroes from '../hero/Heroes'
import AddHero from '../hero/AddHero'
import {useSelector} from 'react-redux'


const Home = () => {
    const statusAddHero = useSelector(state => state.statusAddHero)
    const heroes = useSelector(state => state.heroes)

    return (
        <>
            <Header title='Marvel Heroes'
                statusAdd={statusAddHero} showAdd={true}/>
            {statusAddHero && <AddHero />}
            <Heroes heroes={heroes} />
        </>
    )
}

export default Home
