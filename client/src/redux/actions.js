import axios from 'axios';

export const GET_DOGS = "GET_DOGS";
export const GET_DOGS_DETAILS = "GET_DOGS_DETAILS"
export const GET_BY_BREED = "GET_BY_BREED";
export const ORDER_BY_ALPHABET = "ORDER_BY_ALPHABET"
export const ORDER_BY = "ORDER_BY"
export const FILTER_BY_TEMPERAMENTS = "FILTER_BY_TEMPERAMENTS"

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

export function getDogsDetails (id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/dogs/${id}`)
            return dispatch({
                type: GET_DOGS_DETAILS,
                payload:json.data
            })
        } catch (error) {
            alert(error)
        }
    }
}
export function getDogByBreed (payload) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/dogs?name=${payload}`)
        return dispatch({
            type: GET_BY_BREED,
            payload: json.data
        })
        } catch (error) {
            alert('Breed not found')
        }
    }
}

export function orderBy (payload) { 
        return {
            type: ORDER_BY, 
            payload
        }
}

export function filterByTemperaments (payload) {
    return {
        type: FILTER_BY_TEMPERAMENTS,
        payload
    }
}