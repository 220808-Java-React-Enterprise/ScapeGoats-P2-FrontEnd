import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Header from './Header'
import Stars from '../Assets/Stars.gif'
import '../Utils/CSS/LandingPage.css'
export const LandingPage = () => {
  return (
    <div>

      <div className='backVid' >
      <img src={require('../Assets/Stars.gif')} />
      </div>
<div className="Landing">
<Header />

<Link to="/Login" >
<Button text="Login!"/>
</Link>

<br></br>

<Link to="/SignUp">
 <Button text="Signup!"/>
 </Link>

 </div>
    </div>
  )
}
