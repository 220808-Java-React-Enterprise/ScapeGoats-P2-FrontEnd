import React from 'react';

const Header = (props : any) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

export default Header

Header.defaultProps={
title : "Reality Escape Cards",

}