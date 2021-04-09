import statusAddHeroReducer from './statusAddHero'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    statusAddHero: statusAddHeroReducer
})

export default allReducers