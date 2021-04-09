const statusAddHeroReducer = (state = false, action) => {
    switch(action.type){
        case 'UPDATE_STATUS_ADD': 
             return !state
        default:
            return state
    }
}

export default statusAddHeroReducer