import './Card.css'
import React from "react";
import { Link } from "react-router-dom";
export default function Card({ id, image, name, temperament, min_weight, max_weight }){
var img = 'https://cdnb.artstation.com/p/assets/images/images/040/159/961/original/camila-xiao-pixel-art-doge-cute-dog-aniamted-loop-gif-barking-running-scared-and-happy-loop-gif-8bit-16bit.gif?1628036255'

 return(
    <div className="dogsContainer">
    <div className="dogsCard">
    <div className='gradient'></div>
    <div className="dogsImage">
    {image ? (
        <img className="dogImg" src={`${image}`} alt = "There is no img"/>
        ):
        (
            <img className="loadingGif" src={img} alt = "There is no img"/>
            )
        }
    </div>
   
    <a href={`/dogs/${id}`} > 
    <h2 className="cardName"> {name} </h2>
            </a>
    <div className='temperamentsss'>
    <p className="cardTemperaments"> {temperament} </p>
    </div>
    <p className="cardWeight"> Min Weight: {min_weight} - Max weight: {max_weight}  </p>  
    </div>
    </div>
 )
}