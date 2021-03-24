import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react'


const Hero = ({ hero, onToogleFavoriteHero }) => {

    const [heroDetails, setHeroDetails] = useState({})

    useEffect(() => {
        const fetchHero = async () => {
            const BASE_URL = 'https://gateway.marvel.com:443/v1/public/characters'
            const timeStamp = 'heroes'
            const apiKey = '9161ba06103877daa802a8fcce771abc'
            const hash = 'da93bc20bc6dc586d412e102ec4701dd'
            const ENDPOINT_URL = `${BASE_URL}?name=${hero.name}&ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`
            const res = await fetch(ENDPOINT_URL)
            const response = await res.json()
            const heroes = response.data;
            if(heroes.count > 0)
            {
                setHeroDetails(heroes.results[0])
            }
            else{
                setHeroDetails({ ...hero})
            }
        }
        fetchHero()
    }, [hero])

    return (
        <div className='hero'>
            <div>
                <div className='heroDetails'>
                    {heroDetails.thumbnail ? 
                       <img src={`${heroDetails.thumbnail.path}/portrait_xlarge.${heroDetails.thumbnail.extension}`}
                        alt={hero.name} width="90" height="130" />
                        : ''}
                    <div>
                        <h3>
                            {hero.name}
                        </h3>
                        <div className='heroDescription'>
                            {heroDetails.description}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={hero.isFavorite ? ['fas', 'star'] : ['far', 'star']} style={{ color: '#ffa500' }} onClick={() => onToogleFavoriteHero(hero.id)} />
            </div>
        </div>
    )
}

export default Hero
