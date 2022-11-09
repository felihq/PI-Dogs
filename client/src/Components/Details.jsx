import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDogsDetails } from "../redux/actions";
var img = 'https://cdnb.artstation.com/p/assets/images/images/040/159/961/original/camila-xiao-pixel-art-doge-cute-dog-aniamted-loop-gif-barking-running-scared-and-happy-loop-gif-8bit-16bit.gif?1628036255'

export default function Details(){
const { id } = useParams();

const dispatch = useDispatch();
const dogsDetail = useSelector((state) => state.dogsDetails);


useEffect(() => {
    dispatch(getDogsDetails(id));
}, [dispatch, id]);


return (

    <div>
   <div>
        <h2> {dogsDetail.name} </h2>
            <div >
                <img  src={dogsDetail.image ? dogsDetail.image : img } />
            </div>
            {/* <p> {dogsDetail.temperament} </p> */}
          
            <p> { dogsDetail.temperament}</p>
            <p > Min Weight: {dogsDetail.min_weight} - Max Weight: {dogsDetail.max_weight} </p>
            <p > Min Height: {dogsDetail.min_height} - Max Height: {dogsDetail.max_height} </p>
            <p > Life Span: {dogsDetail.life_span} </p>

           <Link to ="/home" >
                <button> Back </button>
            </Link>

           
        </div>
         
    </div>
    
)
}
            
            



             





