import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import { getDogByBreed } from '../redux/actions';
import './SearchBar.css'


export default function SearchBar(){

    const dispatch = useDispatch();
    const [name, setName] = useState('') 

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value) 
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!name.length) { 
            return alert('Please insert a valid name.') 
    } else {
        dispatch(getDogByBreed(name)) 
        setName('') 
    }
    }
    
    

    return(
        <div>
            <input className='breedInputCss' type='text'
            placeholder="Breed..."
            value={name} 
            onKeyPress={e => e.key === 'Enter' ? handleSubmit(e) : null}
            onChange = {(e) => {handleInputChange(e)}}
            />
            <button type = 'submit' className='breedButtonCss' onClick={(e) => {handleSubmit(e)}}> Submit </button> 
        </div>
    )
}