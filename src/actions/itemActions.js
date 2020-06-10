import {CITY_SELECTED, DATA_FIRSTLOAD, GET_ID, ID_NULL, PLUS_QUANT, MINUS_QUANT, ADD_TO_CART, CHANGE_QUANT, PLUS_QUANT_CART, MINUS_QUANT_CART, ADD_TO_ORDER } from "./types.js"


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

export const changeItemQuant = ({id}, quantity) => {
    return {
        type: CHANGE_QUANT,
        payload: {
            id, 
            quantity
        }
    }
}


export const plusQuantinCart = (id) => {
    return {
        type: PLUS_QUANT_CART,
        payload: id
    }
}

export const minusQuantinCart = (id) => {
    return {
        type: MINUS_QUANT_CART,
        payload: id
    }
}

export const fromCartInOrder = (items) => {
    return {
        type: ADD_TO_ORDER,
        payload: items
    }
}