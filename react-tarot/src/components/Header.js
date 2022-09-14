import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
  return (
        <header>
        <h1>{title}</h1>
        

        </header>



        
       


  )
}
Header.defaultProps ={
    title: "Reality Escape Cards",
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}


export default Header