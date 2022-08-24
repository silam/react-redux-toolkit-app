import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../slices/counerSlices';



const store = new configureStore({
    reducer:{
        counter: counterReducer,
    },
});

export default store;