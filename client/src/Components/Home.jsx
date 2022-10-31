import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../redux/actions";
import Card from './Card'
import './Home.css'

export default function Home(){
const dispatch = useDispatch();
const allDogs = useSelector ((state) => state.dogs);

useEffect(() => {
    dispatch(getDogs())   
},[dispatch])

function handleClick(e){
    e.preventDefault();
    dispatch(getDogs())
    }

    return(

        <div>
            <h1> Welcome </h1>
            <button onClick={e =>{handleClick()}}>
            Refresh
            </button>
            <div className="CardContainer">
                {allDogs?.map((e) => (
                    <div key={e.id} >
                        
                        <Card id={ e.id }
                            name = { e.name }
                            image = { e.image }
                            temperament = { e.temperament?.join(', ') }
                            weightMin = {e.weightMin}
                            weightMax = {e.weightMax}
                            />                     

                    </div>
                ))}
        </div>

 </div>


    )
}
