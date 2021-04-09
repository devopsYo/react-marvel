import Hero from './Hero'

const Heroes = ({heroes, onToogleFavoriteHero, match}) => {

    return (
        <div>
            {heroes.map((hero) => (
               <Hero key={hero.id} hero={hero} onToogleFavoriteHero={onToogleFavoriteHero} />
            ))}
        </div>
    )
}

export default Heroes
