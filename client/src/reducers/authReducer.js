import { FETCH_USER } from "../actions/types";

//eslint-disable-next-line
const authReducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false; //payload = user model
        default:
            return state;
    }
};
export default authReducer

/* antiga função com erro no lint
//eslint-disable-next-line
export default function(state = null, action) {
    console.log(action); //apenas para verificar a ação
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false; //payload = user model
        default:
            return state;
    }
} */