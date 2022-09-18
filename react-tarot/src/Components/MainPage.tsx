import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Header from './Header'

const MainPage = () => {
  return (
    <div>
        <Header title="Reality Escape Cards Main Page" />
        <Link to="/ThreeFates">
        <Button text="Three Fates Divination" />
        </Link>
        <br></br>
        <Link to="/ReadingHistory">
        <Button text="Reading History" />
        </Link>
        <br></br>
        <Button text="/Settings" />
        <br></br>
        <Link to="/LandingPage">
        <Button text="Exit" />
        </Link>

        



    </div>
  )
}

export default MainPage