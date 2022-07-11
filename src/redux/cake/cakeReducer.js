import { BUY_CAKE } from "./cakeType"


// initialize state
const initialState = {
    numOfCakes : 10
}

// Initialize reducers

const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default: return state
    }
}

export default cakeReducer;