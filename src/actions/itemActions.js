import {CITY_SELECTED, DATA_FIRSTLOAD, GET_ID, ID_NULL, PLUS_QUANT, MINUS_QUANT, ADD_TO_CART} from "./types.js"


export const setCitySelected = () => {
    return {
        type: CITY_SELECTED
    }
}


export const getDataFromServer = (allItems) => {
    return {
        type: DATA_FIRSTLOAD,
        payload: allItems
    }
}

export const getItemIdForAdding = (id) => {
    return {
        type: GET_ID,
        payload: id
    }
}

export const setIdAndQuantToNull = () => {
    return {
        type: ID_NULL
    }
}

export const plusQuant = () => {
    return {
        type: PLUS_QUANT
    }
}

export const minusQuant = () => {
    return {
        type: MINUS_QUANT
    }
}


export const addItemToCart = ({id}, quantity) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id,
            quantity
        }
    }
}