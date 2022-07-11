import { BUY_ICE } from "./iceType";

const initialState = {
    numOfIceCreams : 20
}

const iceReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICE:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state
    }
}

export default iceReducer;