import { combineReducers } from "redux";


let ProductReducer=(state=[],Action)=>{

   switch (Action.type) {
    case "GET_DATA":
       return [...state,Action.payload];
    default:
      return  state;
   }
}

let SearchProducts=(state=[],Action)=>{
 
   switch (Action.type) {
    case "ADD_DATA":
   default:
      return  state;
   }
}


let rootreducer=combineReducers({ProductReducer
,SearchProducts})

export default rootreducer;