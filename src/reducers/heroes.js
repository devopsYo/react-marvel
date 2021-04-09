const heroes = localStorage.heroes ? JSON.parse(localStorage.heroes) : []

const heroesReducer = (state = heroes, action) => {
    switch(action.type){
        case 'ADD_HERO': {
            const id = state.length + 1
            const newHero = { id, ...action.payload }
            localStorage.setItem('heroes', JSON.stringify([...state, newHero]))           
            return [...state, newHero]     
        }
        default:
            return state
    }
}

export default heroesReducer