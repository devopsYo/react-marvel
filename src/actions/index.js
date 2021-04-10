export const updateStatusAdd = () => {
    return {
        type: 'UPDATE_STATUS_ADD'
    }
}

export const addHero = (hero) => {
    return {
        type: 'ADD_HERO',
        payload: hero
    }
}

export const toogleFavoriteHero = (id) => {
    return {
        type: 'TOOGLE_FAVORITE_HERO',
        payload: id
    }
}