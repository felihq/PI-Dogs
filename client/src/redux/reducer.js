import { GET_DOGS, GET_BY_BREED } from "./actions";

const initialState = {
    dogs : [],
    filtered : [],
}

export default function reducer(state = initialState, action) {

    switch(action.type){
      case GET_DOGS:
      return{
        ...state,
        dogs: action.payload,
        filtered: action.payload
      }
      // case GET_BY_BREED:
      //   return{
      //     ...state,
          
      //   }
        default: 
        return state;
    }
}