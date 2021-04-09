import statusAddHeroReducer from './statusAddHero'
import heroesReducer from './heroes'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    statusAddHero: statusAddHeroReducer,
    heroes: heroesReducer
})

export default allReducers