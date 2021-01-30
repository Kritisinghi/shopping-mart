import * as actionTypes from '../constants'

export const cartReducer = (state = {
    cartItems: []
}, action) => {
    switch (action.type) {
        case actionTypes.CART_ADD:
            const item=action.payload;
            const existItem=state.cartItems.find(x=>x._id===item._id);
            if(existItem){
                return {
                    ...state,
                    cartItems:state.cartItems.map((x)=>x._id===existItem._id? item :x)
                }
            }
            else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,item]
                }
            }
        case actionTypes.CART_REMOVE:
            return{
                ...state,
                cartItems:state.cartItems.filter((x)=>x._id!==action.payload)
            }
        case actionTypes.CART_RESET:
            return {
                ...state,
                cartItems:[]
            }
        case actionTypes.CART_ADD_ALLL:
            return {
                ...state,
                cartItems:[...action.payload]
            }
        default:
            return state;
    }
}