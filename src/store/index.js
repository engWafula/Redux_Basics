//******Redux Toolkit Configurations******//
import { configureStore,createSlice} from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'count',
    initialState:{count:0},
    reducers:{
        increment(state,action){
            state.count++;
        },
        decrement(state,action){
            state.count--;
        },
        add(state,action){
            state.count+=action.payload;
        }
    }
});
export const actions = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer
})

export default store;



















//Redux Configurations
// import { createStore } from "redux";

// const reducer = (state = {count:0}, action) => {
//     if(action.type==='INCREMENT'){
//         return {...state,count:state.count+1};
        
//     }

//     if(action.type==='DECREMENT'){
//         return {...state,count:state.count-1};
        
//     }
//     if(action.type==='ADD'){
//         return {...state,count:state.count+action.payload};
        
//     }
// return state;
// }

//  const store=createStore(reducer);

//  export default store;