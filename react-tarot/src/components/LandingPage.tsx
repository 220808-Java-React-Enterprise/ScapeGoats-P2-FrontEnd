import React from 'react'
import Button from './Button'
import Header from './Header'
import Login from './Login'
import { Link, useInRouterContext, useNavigate } from 'react-router-dom';




export const LandingPage = () => {
  return (
    <div>

<Header />
<Link to="/Login">
<Button text="Login!" onclick="routeToLogin()" />
</Link>

<br></br>
<Link to="/Signup">
 <Button text="Signup!"/>
</Link>
    </div>
  )
}
