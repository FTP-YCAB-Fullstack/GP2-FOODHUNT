import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';


const initialState = {
    data: [],
    order: [],
}

const reducer = (state = initialState, action) => {
    if (action.type === 'GET_API') {
        return {
            ...state,
            data: [...state.data, ...action.payload]
        }
    }

    if (action.type === 'ADD_ITEM') {
        const index = state.data.findIndex(el => el.idMeal === action.payload.idMeal);
        let dataCopy = [...state.data];
        dataCopy[index] = {...dataCopy[index], carted: true};

        return {
            ...state,
            data: dataCopy,
            order: [...state.order, action.payload]
        }
    }

    if (action.type === 'REMOVE_ITEM') {
        const index = state.data.findIndex(el => el.idMeal === action.payload.idMeal);
        let dataCopy = [...state.data];
        dataCopy[index] = {...dataCopy[index], carted: false};

        return {
            ...state,
            data: dataCopy,
            order: state.order.filter(el => el.idMeal !== action.payload.idMeal)
        }
    }

    if (action.type === 'SET_QUANTITY') {
        const index = state.order.findIndex(el => el.idMeal === action.payload.idMeal);
        let orderCopy = [...state.order];
        orderCopy[index] = {...orderCopy[index], quantity: action.payload.quantity};

        return {
            ...state,
            order: orderCopy
        }
    }

    if (action.type === 'LOGIN') {
        return {
            ...state,
            authenticated: true
        }
    }

    return state
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;