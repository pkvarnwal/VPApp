import * as ActionTypes from '../../utils/ActionTypes'

const INITIAL_STATE = {
    name: 'Tanishi'
}

export default (state =  INITIAL_STATE, action) => {
     console.log(action.type)
     console.log(action.payload)
     switch(action) {
        case ActionTypes.GET_USER:
           return { ...state, name: action.payload }

        default:
           return state;   
    }
}