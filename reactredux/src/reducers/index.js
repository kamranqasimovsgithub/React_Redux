import { data } from '../data';

const INITIAL_STATE = {
    bookList: data,
    cart: []
};

export const reducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        case 'SEBETE_QOY':            
            const book = action.payload;
            return { 
                ...state,
                cart: state.cart.find(cartItem => cartItem.id === book.id ) 
                ? state.cart.map(cartItem => cartItem.id === book.id ? {...cartItem, count: cartItem.count + 1} : cartItem ) 
                : [...state.cart, {...book, count: 1 }]};          
        case 'SEBETDEN_CIXAR':            
            return {...state, cart: state.cart.filter(cartItem => cartItem.id !== action.payload)};
        case 'ARTIR':            
            return {
                ...state, 
                cart: state.cart.map(cartItem => cartItem.id === action.payload 
                ? { ...cartItem, count: cartItem.count + 1 } : cartItem)}; 
        case 'AZALT':            
            return {
                ...state, 
                cart: state.cart.map(cartItem => cartItem.id === action.payload 
                ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
                : cartItem)}; 
        default:
            return state;
    };    
};