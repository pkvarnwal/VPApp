import * as ActionTypes from '../../utils/ActionTypes'

export const getMyUser = (payload) => {
    return {
        type: ActionTypes.GET_USER,
        payload: payload,
    }
};