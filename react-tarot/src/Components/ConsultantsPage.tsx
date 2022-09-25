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
  
     <a href="mailto:"/>

<br></br>
    <Link to="/MainPage">
        Back to Main
        </Link>

        </div>
  )
}

export default ConsultantsPage