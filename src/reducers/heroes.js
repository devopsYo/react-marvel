const heroes = localStorage.heroes ? JSON.parse(localStorage.heroes) : []

const heroesReducer = (state = heroes, action) => {
    switch(action.type){
        case 'ADD_HERO': {
            const id = state.length + 1
            const newHero = { id, ...action.payload }
            localStorage.setItem('heroes', JSON.stringify([...state, newHero]))           
            return [...state, newHero]     
        }
        case 'TOOGLE_FAVORITE_HERO': {
            let heroesState = state
            let listHeroes = heroesState.map((hero) => hero.id === action.payload ? { ...hero, isFavorite: !hero.isFavorite } : hero)
            localStorage.setItem('heroes', JSON.stringify([...listHeroes]))
            return [...listHeroes]
        }
        default:
            return state
    }
}

export default heroesReducer