import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, orderBy } from "../redux/actions";
import Card from './Card'
import './Home.css'
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

export default function Home(){
const dispatch = useDispatch();
const allDogs = useSelector ((state) => state.dogs);
const [, setOrder] = useState('All')

const [currentPage, setCurrentPage] = useState(1)
const [dogsPerPage] = useState(8)
const indexOfLastDog = currentPage * dogsPerPage;
const indexOfFirstDog =  indexOfLastDog - dogsPerPage;
const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog)

const pagination = (currentPageNumber) => {
    setCurrentPage(currentPageNumber)
}

useEffect(() => {
    dispatch(getDogs())   
},[dispatch])



function handleClick(e){
    e.preventDefault();
    dispatch(getDogs())
    }

function handleSort (e){
    e.preventDefault() 
    dispatch(orderBy(e.target.value)) 
    setCurrentPage(1) 
    setOrder(e.target.value) 
    }
    
    return(

        <div>
            <h1> Henry Dogs </h1>
            <button onClick={e =>{handleClick()}}>
            Refresh
            </button>
            <div>
            <SearchBar/>
            </div>
            <div>
                <select className="filterBy" onChange={e => handleSort(e)}>
                <option value ="default"> Sort by.. </option>
                <option value = "az"> A-Z</option>
                <option value = "za"> Z-A </option>
                <option value = "asc"> Lightest </option>
                <option value = "desc"> Heaviest </option>
                </select>
            </div>
            <div  className="Pagination">
            <Pagination
                dogsPerPage = {dogsPerPage}
                allDogs = {allDogs.length} 
                pagination = {pagination}
            />
            </div>

            <div className="CardContainer">
                {currentDogs?.map((e) => {
                    return (
                    <div key={e.id} >
                        <Card 
                        id={ e.id }
                        name = { e.name }
                        image = { e.image }
                        temperament = { e.temperament?.join(', ') }
                        min_weight = {e.min_weight}
                        max_weight = {e.max_weight}
                            />                     
                    </div>
)})}
        </div>
 </div>


    )
}
