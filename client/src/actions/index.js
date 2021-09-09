import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {   
    const res = await axios.get('/api/current_user'); //faz requisicao para a API
    
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data})
};

    /* 
    Requisição para API sem o redux thunk, retornando uma ação

    const request = axios.get('/api/current_user');

    return {
        type: FETCH_USER,
        payload: request
    };  
    */


/*    "antes do refactor (função equivalente)" 
export const fetchUser = () => {
    return function(dispatch) {
        axios
            .get('/api/current_user') //faz requisicao para a API
            .then(res => dispatch({ type: FETCH_USER, payload: res }));
    }
}; 
*/