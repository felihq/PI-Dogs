import axios from 'axios';

export const GET_DOGS = "GET_DOGS";
// export const GET_BY_BREED = "GET_DOG_BY_BREED";



export function getDogs () {
return async function (dispatch) {
    try {
        var json = await axios.get("http://localhost:3001/dogs")
        return dispatch({
            type: GET_DOGS,
            payload: json.data,
        })
    } catch (error) {
       alert(error)
    }
}
}

// export function getDogByBreed () {
//     return async function (dispatch) {
//         try {
//             var json = axios.get(`http://localhost:3001/dogs?name=${payload}`)
//         return dispatch({
//             type: GET_BY_BREED,
//             payload: json.data
//         })
//         } catch (error) {
//             alert('Breed not found')
//         }
//     }
// }