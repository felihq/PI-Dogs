import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <div className='landing'>
            <h1>PI Dogs</h1>
            <Link to='/home'>
                <button className='btnLan'>🐶 Let's get into it! 🐶</button>
            </Link>
        </div>
    )
}