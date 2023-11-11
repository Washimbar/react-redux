import { DECREMENT, INCREMENT } from "./counterTypes"

export const incrementCont = () => {
    return{
        type: INCREMENT
    }
}

export const decrementCont = () => {
    return {
        type: DECREMENT
    }
}

