import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import {Dropdown} from 'reactstrap'








const ConsultantsPage = () => {

    const [consult, setConsult] = React.useState('MainWatching');

const handleConsultChange = (event : any) => {
    setConsult(event.target.value);
  };

  useEffect(()=>{

  });

  function emailConsult({ consult }: any)
  {
    if (consult='Cthulu') {
      window.location.href = 'mailto:realityescape2022@gmail.com';
    }
  
  }
  return (
    <div>
        <Header title="Consultants Page"/>

        
        <label>
        Who to consult?
        <br></br>
        <select value={consult} onChange={handleConsultChange}>
          <option value="Cthulu">Cthulu</option>
          <option value="Prince">Prince</option>
          <option value="Mother Theresa">Mother Theresa</option>
        </select>
      </label>
  
      <input id="exiting" type="submit" value="Consult" style={{ border: "none",outline: "none", background : "transparent" }} onClick={emailConsult}/>

<br></br>
    <Link to="/MainPage">
        Back to Main
        </Link>

        </div>
  )
}

export default ConsultantsPage