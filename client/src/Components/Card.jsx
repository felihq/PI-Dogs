import './Card.css'
import React from "react";
import { Link } from "react-router-dom";
export default function Card({ id, image, name, temperament, weightMin, weightMax }){


 return(
    <div className="dogsContainer">
    <div className="dogsCard">
    <div className="dogsImage">
    <img src = {image} alt='img'/>
    </div>
    <h2 className="cardName"> {name} </h2>

    <p className="cardTemperaments"> {temperament} </p>

    <p className="cardWeight"> Min Weight: {weightMin} - Max weight: {weightMax}  </p>  

    

     <Link to ={`/dogs/${id}`} > 
     <button classname = 'infoButton'> More info </button>
     </Link>

    </div>
    </div>
 )
}