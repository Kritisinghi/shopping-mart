import * as actionTypes from "../constants";

export const loginReducer = (
    state = {
        login: {},
    },
    action
) => {
    switch (action.type) {
        case actionTypes.GOOGLE_LOGIN_SUCCESS:
            return {
                login: action.payload,
                    loading: false,
            }
            case actionTypes.GOOGLE_LOGIN_FAILURE:
                return {
                    login: null,
                        loading: false,
                        error: action.payload
                }
                case actionTypes.GOOGLE_LOGIN_REQUEST:
                    return {
                        login: null,
                            loading: false,
                    }
                    default:
                        return state;
    }
};