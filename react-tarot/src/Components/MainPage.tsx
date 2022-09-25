import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Header from './Header'
import '../Utils/CSS/MainPage.css'
function redirect()
{
    window.location.href = 'mailto:escapecards2022@outlook.com';
}
const MainPage = () => {

  //Creating useEffect counter for assiting the logout feature.
  const [counter, setCounter] = useState(2);
  useEffect(() => {}, [counter])

  function logOut()
  {
    sessionStorage.clear();
    localStorage.clear();
    setCounter((counter) => counter - 1);
  }

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
        <br></br>
        <input id="exiting" type="submit" value="Contact" style={{ border: "none",outline: "none", background : "transparent" }} onClick={redirect}/>
      
        <Link to="/">

        <input id="exiting" type="submit" value="Exit" style={{ border: "none",outline: "none", background : "transparent" }} onClick={logOut}/>
        </Link>
       </div>
        
    </div>
  )
}

export default MainPage