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

function redirect()
{
    window.location.href = 'mailto:realityescape2022@gmail.com';
}

const MainPage = () => {
  return (

    <div>

<video src={require('../Assets/MainWatching.mp4')} autoPlay loop muted />
<div className="MainLook">
        
        <Link to="/Categ">
        <Button text="Three Fates Divination" />
        </Link>

        <br></br>
        <Link to="/ReadingHistory">
        <Button text="Reading History" />
        </Link>
        <br></br>
        <input id="exiting" type="submit" value="Consult" style={{ border: "none",outline: "none", background : "transparent" }} onClick={redirect}/>
      
        <Link to="/">

        <input id="exiting" type="submit" value="Exit" style={{ border: "none",outline: "none", background : "transparent" }} onClick={logOut}/>
        </Link>
       </div>
        
    </div>
  )
}

export default MainPage