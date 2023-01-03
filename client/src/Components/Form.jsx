import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDog, getTemperaments } from "../redux/actions";
import { Link, useHistory } from "react-router-dom";
import "./Form.css";
import swal from 'sweetalert';

function validate (input) {
    let errors = {};
    if (!input.name){
        errors.name = "Name is required"}
    else if (!input.name.match(/^[A-Za-z\s]+$/)){
        errors.name = "Only letters, please"
}
    
    if(!input.life_span){
        errors.life_span = "Life span is required"
    }
    else if (input.life_span < 1 || input.life_span > 25) {
        errors.life_span = "Between 1 - 25 years"
    }

    if (!input.min_height){
        errors.min_height = "Min height is required"
    }
    else if (input.min_height < 10){
    errors.min_height = "Must be more than 10 cm"
    }
    if (!input.max_height){
        errors.max_height = "Max height is required"
    }
    else if (input.max_height > 80){
        errors.max_height = "Must be less than 80 cm"
    }
    if (!input.min_weight){
        errors.min_weight = "Min weight is required"
    }
    else if (input.min_weight < 1){
        errors.min_weight = "Must be more than 1 kg"
    }
    if (!input.max_weight){
        errors.max_weight = "Max weight is required"
    }
    else if (input.max_weight > 100){
        errors.max_weight = "Must be less than 100 kg"
    }
   else if(Number(input.min_height) > Number(input.max_height)){
    errors.max_height = "Must be higher than min height"
    }
   else if(Number(input.min_weight) > Number(input.max_weight)){
    errors.max_weight = "Must be heavier than min weight"
    }        
   
    return errors
}
export default function Form(){
     const dispatch = useDispatch()
     const history = useHistory()
     
    
     const [errors, setErrors] = useState({})
     const temperaments = useSelector((state) => state.temperaments)

     useEffect(() => {
         dispatch(getTemperaments())
    },[dispatch])

    const [input, setInput] = useState({
        name: '',
        life_span: '',
        min_weight: '',
        max_weight: '',
        min_height: '',
        max_height: '',
        image: '',
        temperament: []
    })


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
         })
         setErrors(validate({
             ...input,
             [e.target.name] : e.target.value
         }))
    }

    function handleTemperaments(e){
        e.preventDefault()
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value]
        })
        setErrors(validate({
            ...input, 
            temperament: [...input.temperament, e.target.value]
        }))
    }

    function handleSubmit(e) {
        if (input.name && input.temperament) {
        e.preventDefault();
        dispatch(createDog(input)) 
        swal("Dog created successfully! 😊");
        setInput({
            name: "",
            life_span: "",
            min_weight: "",
            max_weight: "",
            min_height: "",
            max_height: "",
            image: "",
            temperament: []
              })
        history.push("/home")
    }
    else{
        swal("Please fill all the fields!");
    }
     }


    function handleDelete (e){
        e.preventDefault()
        setInput((input) => ({
            ...input,
            temperament: input.temperament.filter((t) => t !== e.target.value)
        }))
    }

    return (
       <div className="formTitle">
        <div className="formCss">
                <div className="formTiitle">
                <h1>Create your own dog!</h1>
            </div>
            <div className="form">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="inputCss">
                <label className="dogNameLabel"> Name: </label>
                <input className="input"  autoComplete="off" type="text" name="name" value={input.name} onChange = {(e) => handleChange(e)} />
                {errors.name && <p>{errors.name}</p>}
                </div>

                <div className="inputCss">
                <label> Life span: </label>
                <input  className="input" type='number' min='1' max='25' name='life_span' value={input.life_span} onChange = {(e) => handleChange(e)} />
                {errors.life_span && <p>{errors.life_span}</p>}
                </div>

                <div className="inputCss"> 
                <label> Min weight: </label>
                <input className="input" type='number' name='min_weight' min='1' value={input.min_weight} onChange = {(e) => handleChange(e)} />
                {errors.min_weight && <p>{errors.min_weight}</p>}
                </div>

                
                <div className="inputCss">
                <label> Max weight: </label>
                <input className="input"  type='number' name='max_weight' max='100' value={input.max_weight} onChange = {(e) => handleChange(e)} />
                {errors.max_weight && <p>{errors.max_weight}</p>}
                </div>

                
                <div className="inputCss"> 
                <label> Min height: </label>
                <input className="input"  type='number' name='min_height' min='10' value={input.min_height} onChange = {(e) => handleChange(e)} 
                 />
                {errors.min_height && <p>{errors.min_height}</p>}
                </div>

                <div className="inputCss"> 
                <label> Max height: </label>
                <input className="input"  type='number' name='max_height' max='80' value={input.max_height} onChange = {(e) => handleChange(e)} />
                {errors.max_height && <p>{errors.max_height}</p>}
                </div>

                <div className="inputCss">
                <label> Image: </label>
                <input  className="input" autoComplete="off" type='url' name='image' value={input.image} onChange = {(e) => handleChange(e)} />
                </div>

                <div className="inputCss">
            <label> Temperaments: </label>
            <select value={input.temperament} onChange={(e) => handleTemperaments(e)}>
                {temperaments.map((el) => (
                    <option key={el.id} value={el.name}>
                        {el.name}
                    </option>
                ))}
            </select>
              </div>
                </form>
                </div>

                <div className="temperaments"> 
                {input.temperament.map((t) => ( 
                    <div className="temperament">
                        <button className="deleteButton" value={t} onClick={(e) => handleDelete(e)}> x </button>
                        {t}
                        </div>
                ))}
                </div>
                <div className="buttonsForm">
                <Link to ="/home" >
                     <button className='goBackButton'> Back </button>
                 </Link>
                <button className='submitButton' type="submit" onClick={(e) => handleSubmit(e)}> Submit </button>
                </div>
                </div>
            </div>
    )
}

