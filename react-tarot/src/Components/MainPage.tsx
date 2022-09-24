import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Header from './Header'
import '../Utils/CSS/MainPage.css'
 function logOut()
{
sessionStorage.clear();
localStorage.clear();
}



const MainPage = () => {
  return (

    <div>

<video src={require('../Assets/MainWatching.mp4')} autoPlay loop muted />
<div className="MainLook">
        <Header title="Reality Escape Cards Main Page" />
        <Link to="/Categ">
        <Button text="Three Fates Divination" />
        </Link>

        <br></br>
        <Link to="/ReadingHistory">
        <Button text="Reading History" />
        </Link>

        
        <Link to="/">

        <input id="exiting" type="submit" value="Exit" style={{ border: "none",outline: "none", background : "transparent" }} onClick={logOut}/>
        </Link>
       </div>
        
    </div>
  )
}

export default MainPage