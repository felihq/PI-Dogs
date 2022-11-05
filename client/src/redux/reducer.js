import { GET_DOGS, GET_BY_BREED, GET_DOGS_DETAILS, ORDER_BY, FILTER_BY_TEMPERAMENTS, GET_TEMPERAMENTS, FILTER_BY_BREED } from "./actions";

const initialState = {
    dogs : [],
    filtered : [],
    dogsDetails: [],
    temperaments: []
}

export default function reducer(state = initialState, action) {

    switch(action.type){
case GET_DOGS:
      return{
        ...state,
        dogs: action.payload,
        filtered: action.payload
      }
case GET_BY_BREED:
        return{
          ...state,
          dogs: action.payload
        }
        case GET_TEMPERAMENTS:
          return {
              ...state,
              temperaments : action.payload
          }
case GET_DOGS_DETAILS:
         return{
           ...state,
          dogsDetails: action.payload
         }
         case ORDER_BY:
          if (action.payload === "default"){
            return {
                ...state,
                dogs: state.dogs
            }
        }
    if (action.payload === "az") {
        return {
            ...state,
            dogs: state.dogs.sort(function (a, b) { //sorts the array of objects by name
                if (a.name > b.name) { //if the name of the first object is greater than the second object
                    return 1; 
                }
                if (b.name > a.name) {
                    return -1; 
                }
                return 0
             }) 
        }
    } 
    if (action.payload === "za"){
      return{
          ...state,
          dogs: state.dogs.sort (function (a, b) {
              if (a.name > b.name) {
                  return -1;
              }
              if (b.name > a.name) {
                  return 1
              }
              return 0;
          }) 

      }
  }
  if(action.payload === "asc" ){
    return {
        ...state,
        dogs: state.dogs.sort (function (a, b) {
         if (a.max_weight > b.max_weight) {
             return 1;
         }
         if (b.max_weight > a.max_weight) {
             return -1;
         }
         return 0                        
     }) 
    }
}
if(action.payload === "desc"){
    return {
        ...state,
        dogs: state.dogs.sort (function (a, b) {
         if (a.max_weight > b.max_weight) {
             return -1;
         }
         if (b.max_weight> a.max_weight) {
             return 1
         }
         return 0;
     }) 
   }
}
else{
    return {
        ...state,
    }
}
case FILTER_BY_TEMPERAMENTS:
  const allDogs = state.filtered; //all dogs is equal to the filtered array
  const temperamentFilter = action.payload === 'All' ? allDogs : allDogs.filter((e) => e.temperament?.includes(action.payload))
  return {
      ...state,
      dogs: temperamentFilter, 
           }
case FILTER_BY_BREED:
  const allBreeds = state.filtered
  const breedsFilter = action.payload === 'created' ?
    allBreeds.filter((e) => e.createdInDataBase) 
    : action.payload === 'api' ?
    allBreeds.filter((e) => !e.createdInDataBase) 
    : action.payload === 'all' &&
    allBreeds
          return {
             ...state,
               dogs: breedsFilter,
               
}
        default: 
        return state;
    }
}

