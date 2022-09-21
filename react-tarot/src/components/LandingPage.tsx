import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Header from './Header'


export const LandingPage = () => {
  return (
    <div>

<Header />

<Link to="/Login">
<Button text="Login!"/>
</Link>

<br></br>

<Link to="/SignUp">
 <Button text="Signup!"/>
 </Link>
    </div>
  )
}
