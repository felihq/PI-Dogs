import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import { getDogByBreed } from '../redux/actions';

export default function SearchBar(){

    const dispatch = useDispatch();
    const [name, setName] = useState('') 

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value) 
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!name.length) { //si no hay nada en el input
            return alert('Please insert a valid name.') //no hace nada
    } else {
        dispatch(getDogByBreed(name)) //si hay algo en el input, hace el dispatch con el valor del input
        setName('') 
    }
    }
    
    

    return(
        <div>
            <input className='breedInputCss' type='text'
            placeholder="Dog's breed goes here"
            value={name} 
            onKeyPress={e => e.key === 'Enter' ? handleSubmit(e) : null}
            onChange = {(e) => {handleInputChange(e)}}
            />
            <button type = 'submit' className='breedButtonCss' onClick={(e) => {handleSubmit(e)}}> Submit </button> 
        </div>
    )
}